import React,{useReducer} from 'react';

export default (reducer,actions,initialState)=> {
    const Context=React.createContext();
     
    const Provider=({children})=> {

        const [state,dispatch]=useReducer(reducer,initialState);
        // console.log('state',state)
        console.log("initialState",initialState)
        //actions === {addBlogPosts:(dispatch)=>return()=>{} } }
        const boundActions={};
        for (let Key in actions) {
            boundActions[Key] =actions[Key](dispatch)
        }
        return <Context.Provider value={{state,...boundActions}}>{children}</Context.Provider>
    }
    return {Context,Provider};
};
