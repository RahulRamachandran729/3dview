import React, { useState } from 'react';
import axios from 'axios';

function Dashboard() {
    const [name, setName] = useState('');
    const [file, setFile] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('model', file);

        axios.post('http://localhost:5173/upload', formData)
            .then(response => console.log(response.data))
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h2>Upload a 3D Model</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label>File</label>
                    <input type="file" onChange={(e) => setFile(e.target.files[0])} required />
                </div>
                <button type="submit">Upload</button>
            </form>
        </div>
    );
}

export default Dashboard;
