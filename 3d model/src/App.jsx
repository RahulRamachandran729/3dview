import React from 'react';
import { BrowserRouter, Router, Route, Routes} from 'react-router-dom';
import ModelViewer from './Components/ModelViewer';
import DashboardPage from './Pages/DashboardPage';

function App() {
    return (
      <BrowserRouter>
        <Routes>
            
                <Route path="/" element={<ModelViewer/>} />
                <Route path="/dashboard" element={<DashboardPage/>} />
            
        </Routes>
        </BrowserRouter>
    );
}

export default App;
