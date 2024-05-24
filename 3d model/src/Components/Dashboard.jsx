import React, { useState } from 'react';
import axios from 'axios';

function Dashboard() {
    const [name, setName] = useState('');
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('model', file);

        axios.post('http://localhost:5173/upload', formData)
        .then(response => {
            setMessage('File uploaded successfully');
            console.log(response.data);
        })
        .catch(error => {
            setMessage('Error uploading file');
            console.error(error);
        });
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Upload a 3D Model</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 p-2 block w-full rounded-md border-gray-300" />
                </div>
                <div>
                    <label htmlFor="file" className="block text-sm font-medium text-gray-700">File</label>
                    <input id="file" type="file" onChange={(e) => setFile(e.target.files[0])} required className="mt-1 p-2 block w-full rounded-md border-gray-300" />
                </div>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Upload</button>
                {message && <p className="text-sm text-gray-500">{message}</p>}
            </form>
        </div>
    );
}

export default Dashboard;
