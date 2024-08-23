import React from "react";
import styled from "styled-components";

export interface ProfileCardProps {
    firstName ?: string
    lastName ?: string
    image ?: DriverImageProps
    constructor ?: string
}

export interface DriverImageProps{
    url ?: string
    alt ?: string
}

export const ProfileCard: React.FunctionComponent<ProfileCardProps> = ({
    firstName,
    lastName,
    image,
    constructor
}) =>{
    return(
        <Stylewrapper className="profilecard" data-cy="Profile-Card">
            <div className="profilecard-namecontainer">
                <p className="profilecard-namecontainer-fname">{firstName}</p>
                <p className="profilecard-namecontainer-lname">{lastName}</p>
            </div>
            <div className="profilecard-image">
                <img src={image?.url} alt={image?.alt}/>
            </div>
            <div className="profilecard-constructor">
                <p className="profilecard-constructor-name">{constructor}</p>
            </div>
        </Stylewrapper>
    )
}

const Stylewrapper = styled.div`
    &.profilecard{
        border: 4px solid var(--f1-white);
        border-radius: 20px;
        width: 250px;
        height: 270px;
        position: relative;
        background: 
        linear-gradient(
            -26.56deg, 
            var(--f1-red) 33%, 
            var(--f1-dark-red) 33.3% 66.6%, 
            var(--f1-red) 67%
        ), 
        repeating-linear-gradient(
            -45deg,
            var(--f1-red), 
            var(--f1-red) 10px, 
            var(--f1-dark-red) 10px, 
            var(--f1-dark-red) 20px
        );
    background-size: 50px 50px;
    }
    .profilecard-namecontainer{
        margin-left: 20px;
        margin-top: 10px;
        .profilecard-namecontainer-lname{
            margin-top: 0px;
        }
        .profilecard-namecontainer-fname ,  .profilecard-namecontainer-lname{
            color: var(--f1-white);
            font-family: var(--font-new-amsterdam);
            font-size: 22px;
            margin-bottom: 0px;
        }
    }
    .profilecard-image {
        display: flex;
        justify-content: flex-end;
        position: absolute;
        top: 45px;
        img{
            max-width: 70%;
        }
    }
    .profilecard-constructor .profilecard-constructor-name{
        color: var(--f1-white);
        font-family: var(--font-play);
        position: absolute;
        bottom: 5%;
        left: 50%;
        transform: translateX(-50%);
    }
`
