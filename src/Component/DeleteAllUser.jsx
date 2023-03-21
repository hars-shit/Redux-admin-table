import React from "react";

import { useDispatch } from "react-redux";
import { removeAllUser } from "../store/slices/userSlice";

const DeleteAllUser=()=>{
    const dispatch=useDispatch();

    const removeAll=(payload)=>{
        dispatch(removeAllUser(payload));
    }
    return(
        <>
       <button onClick={removeAll}>Remove All Entry</button>
        </>
    )
}
export default DeleteAllUser;