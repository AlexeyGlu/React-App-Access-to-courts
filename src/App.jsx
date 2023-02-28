import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import routeConfig from './routes/routeConfig';

function App() {
  return (
    <>
        <Header />          
        <Routes>
           { routeConfig.map( (route, index) => (
                <Route 
                    key={index}
                    path={route.path} 
                    element={<route.element/>} />
            ))
            }
        </Routes>
        <Footer />
    </>
  );
}

export default App;
