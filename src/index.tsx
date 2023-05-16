import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";


import App from './App';
import {CssBaseline} from "@mui/material";
import {Provider} from "react-redux";
import {setupStore} from "./redux";

const store = setupStore()

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <CssBaseline>
            <Provider store={store}>
            <App/>
            </Provider>
        </CssBaseline>
    </BrowserRouter>
);
