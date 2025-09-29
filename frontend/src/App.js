import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ZoomPhonePresentation from './components/ZoomPhonePresentation';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ZoomPhonePresentation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;