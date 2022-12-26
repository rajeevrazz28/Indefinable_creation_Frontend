import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import Logo from '../assets/logo.png'
import Logout from './Logout';

export default function Contacts({ contacts, currentUser, changeChat }) {
    const [currentUserName, setCurrentUserName] = useState(undefined);
    const [currentUserImage, setCurrentUserImage] = useState(undefined);
    const [currentSelected, setCurrentSelected] = useState(undefined);

    useEffect(() => {
        if (currentUser) {
            setCurrentUserImage(currentUser.avatarImage);
            setCurrentUserName(currentUser.username);
        }
    }, [currentUser]);

    const changeCurrentChat = (index, contact) => { 
        setCurrentSelected(index);
        changeChat(contact);
    };
    return (
        <>
            {
                currentUserImage && currentUserName && (
                    <Container>
                        <div className="brand">
                        
                            <img src={Logo} alt="logo" />
                            
                            
                        </div>
                        <div className="contacts">
                            {
                                contacts.map((contact, index) => {
                                    return (
                                        <div
                                         className={`contact ${
                                            index === currentSelected ? "selected" : ""
                                            }`}
                                             key={contact._id}
                                              onClick={()=>changeCurrentChat(index,contact)}>
                                                
                                            <div className="avatar">
                                                <img src={`data:image/svg+xml;base64,${contact.avatarImage}`} alt="avatar" />
                                            </div>
                                            
                                            <div className="username">
                                                <h3>{contact.username}</h3>
                                            </div>
                                            
                                        </div>
                                        
                                    )
                                })
                            }
                        </div>
                        
                        <div className="current-user">
                        <Logout />
                        <div className="avatar">
                                                <img src={`data:image/svg+xml;base64,${currentUserImage}`} alt="avatar" />
                                            </div>
                                            
                                            <div className="username">
                                              
                                                <h2>{currentUserName}</h2>
                                                
                                            </div>
                        </div>
                    </Container>
                )
            }
        </>
    )
}


const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 75% 15%;
  overflow: hidden;
  border: 0.1rem solid #2d2d2f;
  border-radius: 5px;
  background-color: #1c1c20;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    /* justify-content: center; */
    padding-left: 20px;
    /* padding-bottom: 10px; */
    padding-top: 10px;
    img {
      height: 4rem;
    }
    h3 {
      color: white;
      text-transform: uppercase;
    }
  }
  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    
    overflow: auto;
    gap: 0.5rem;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .contact {
      background-color:transparent;
      
      
      min-height: 4.5rem;
      cursor: pointer;
      width: 90%;
      border-radius: 5px;
      padding: 0.4rem;
      display: flex;
      gap: 1rem;
      align-items: center;
      .avatar {
        img {
          height: 2.5rem;
        }
      }
      .username {
        h3 {
          color: white;
          font-weight: 400;
          text-transform: capitalize;
          margin-left: 10px;
          
        }
      }
      &:hover {
      
      background-color: #ffffff39;
    }
    }
    .selected {
      background-color: #ffffff39;
    }
  }
  .current-user {
    background-color: #1c1c20;
    border: 0.1rem solid #2d2d2f;
    display: flex;
    border-radius: 5px;
    margin-top: 37px;
    height: 63%;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    .avatar {
      img {
        height: 3rem;
        max-inline-size: 100%;
      }
    }
    .username {
      h2 {
        color: white;
        font-weight: 400;
        text-transform: capitalize;
      }
    }
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      gap: 0.5rem;
      .username {
        h2 {
          font-weight: 100;
          font-size: 1rem;
        }
      }
    }
  }
`;

