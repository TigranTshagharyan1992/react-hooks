import {useAlert} from "./AlertContext";

const Alert = () => {

   const {alertVisible,toggleAlert} = useAlert();

   if(!alertVisible) return null;

    return (
        <div className={'alert alert-danger'} onClick={toggleAlert}>
            Some important message
        </div>
    );
};

export default Alert;