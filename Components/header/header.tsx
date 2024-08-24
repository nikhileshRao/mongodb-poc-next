import React from "react";
import styled from "styled-components";

export interface HeaderProps {
    headerlogo ?: headerLogo
}

export interface headerLogo {
    url ?: string
    alt ?: string
}

export const Header: React.FunctionComponent<HeaderProps> = ({
    headerlogo
}) =>{
    return (
        <Stylewrapper className="header" data-cy="Header">
            <div className="header-logocontainer">
                <img src={headerlogo?.url} alt={headerlogo?.alt}/>
            </div>
        </Stylewrapper>
    )
}

const Stylewrapper = styled.div`
    &.header{
        background-color: var(--f1-red);
        width: 100%;
        height: 70px;
        display: flex; 
        justify-content: center;
        align-items: center;

        .header-logocontainer{
            display: flex;
            
        }
    }
`