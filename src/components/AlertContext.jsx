import React, {useContext, useReducer, useState} from 'react'



const AlertContext = React.createContext();

export const useAlert = () =>{
    return useContext(AlertContext);
}
const SHOW = 'show'
const HIDE = 'hide'
const reducer = (state, action) => {
    switch (action.type) {
        case SHOW: return {...state, alertVisible:true}
        case HIDE: return {...state, alertVisible:false}
        default: return state;
    }
}
export const AlertContextProvider = ({children}) => {

    // const [alertVisible,setAlertVisible] = useState(false);
    //


    const [state, dispatch] = useReducer(reducer, {
        alertVisible: false
    });

    const toggleAlert = () => {
        if(state.alertVisible){
            dispatch({type: HIDE})
        }else{
            dispatch({type: SHOW})
        }

    }

    return (
        <div>
            <AlertContext.Provider value={{alertVisible: state.alertVisible,toggleAlert}}>
                {children}
            </AlertContext.Provider>
        </div>
    );
};
