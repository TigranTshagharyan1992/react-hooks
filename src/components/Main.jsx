import React from 'react';
import {useAlert} from "./AlertContext";

const Main = () => {

   const {toggleAlert} = useAlert();

    return (
        <div>
            <h1>Hi example context</h1>
            <button onClick={toggleAlert} className="btn btn-success">
                Show alert
            </button>
        </div>
    );
};

export default Main;