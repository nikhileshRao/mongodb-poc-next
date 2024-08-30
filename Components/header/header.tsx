import React from "react";
import styled from "styled-components";
import { SearchBar } from "../header/searchbar"

export interface HeaderProps {
    headerlogo ?: headerLogo
    enableSearchBar ?: boolean
    placeholder ?: string
    onInputChange ?: any
}

export interface headerLogo {
    url ?: string
    alt ?: string
}

export const Header: React.FunctionComponent<HeaderProps> = ({
    headerlogo,
    placeholder,
    enableSearchBar = false,
    onInputChange
}) =>{
    return (
        <Stylewrapper className="header" data-cy="Header">
            <div className="header-logocontainer">
                <img src={headerlogo?.url} alt={headerlogo?.alt}/>
            </div>
            {enableSearchBar ? 
                <div className="header-searchbar" >
                    <SearchBar placeholder={placeholder} onInputChange={onInputChange}/>
                </div>
            : null }
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
        justify-content: space-around;
        .header-logocontainer{
            display: flex;
        }
    }
`