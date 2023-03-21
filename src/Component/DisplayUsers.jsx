import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { fakeData } from "../api/data";
import { useDispatch } from "react-redux";
import {  removeUser } from "../store/slices/userSlice";

const DisplayUsers=()=>{
    const dispatch=useDispatch();

    const data=useSelector((state)=>{
        return state.users;
    })
    console.log(data);
    const removeRecentUser=(payload)=>{
        // console.log(payload);
        dispatch(removeUser(payload));
      }
    return <Wrapper>
        {
            data.map((user,id)=>{
                return <li key={id}>
                    {user}
                    <button onClick={()=>removeRecentUser(fakeData())}>Remove</button>
                </li>
            })
        }
    </Wrapper>

}

const Wrapper=styled.section`
li{
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:1rem;
    border-bottom:1px solid #eee;

    &:first-child{
        border-top:1px solid #eee;
    }
}`
export default DisplayUsers;