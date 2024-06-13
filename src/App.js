import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ProjectsPage from './pages/ProjectsPage';
import Error404 from './pages/Error404';

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
    </>
  );
}

export default App;
