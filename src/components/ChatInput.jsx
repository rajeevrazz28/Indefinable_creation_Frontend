import React,{useState} from 'react'
import styled from 'styled-components'
import {IoMdSend} from 'react-icons/io'


export default function ChatInput({handleSendMsg}) {
    const [msg, setMsg] = useState("");

    const sendChat = (e)=>{
        e.preventDefault();
        if(msg.length>0){
            handleSendMsg(msg);
            setMsg('');
        }
    }
  return (
    <Container>
        <div className="button-container">
          
        </div>
        <form className='input-container' onSubmit={(e)=>sendChat(e)}>
            <input type="text" placeholder='Type your message here!' value={msg} onChange={(e)=>{setMsg(e.target.value)}}/>
            <button className="submit">
                <IoMdSend />
            </button>
        </form>
    </Container>
  )
}

const Container = styled.div`
display: grid;
grid-template-columns: 5% 95%;
align-items: center;
background-color: #1c1c20;
border: 0.1rem solid #2d2d2f;
border-radius: 5px;
padding: 0 2rem;
margin-bottom: 3px;
padding-bottom: 0.3rem;
@media screen and (min-width: 720px) and (max-width: 1080px){
    padding: 0 1rem;
    gap: 1rem;
}


.input-container{
    width: 100%;
    margin-left: -20px;
    border-radius: 10px;
    margin-top: 5px;
    display: flex;
    align-items: center;
    gap: 2rem;
    background-color: #ffffff34;
    input{
        width: 90%;
        height: 60%;
        background-color: transparent;
        color: white;
        border: none;
        
        padding-left: 2rem;
        font-size: 1.2rem;
        &::selection{
            background-color: #9186f3;
        }
        &:focus{
            outline: none;
        }
    }
    button{
        padding: 0.4rem 2rem;
        border-radius: 5px;
        display: flex;
        
        justify-content: center;
        align-items: center;
        background-color: #393741;
        border: none;
        cursor: pointer;
        @media screen and (min-width: 720px) and (max-width: 1080px){
            padding: 0.3rem 1rem;
            svg{
            font-size: 1rem;
            color: white;
        }
        }
        svg{
            font-size: 2rem;
            color: white;
        }
    }
}
`;
