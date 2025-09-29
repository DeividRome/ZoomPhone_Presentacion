/*import React from 'react';
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

export default App;*/

import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PresentationApp from "./components/ZoomPhonePresentation";

function App() {
  return (
    <div className="App">
      {/* process.env.PUBLIC_URL contendrá '/edbpresentacion' gracias al campo "homepage" */}
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<PresentationApp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
