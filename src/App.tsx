import React from 'react';
import {Route, Routes} from "react-router-dom";

import './App.css'
import {MyLayout} from "./Layout/MyLayout";
import {Home} from "./pages";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<MyLayout/>}>
                    <Route index element={<Home/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
