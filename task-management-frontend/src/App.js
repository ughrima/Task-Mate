import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Home from './components/Home'; // Assuming you have a Home component
import Signin from './components/Signin'; // Assuming you have a Signin component

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/signin" element={<Signin />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
