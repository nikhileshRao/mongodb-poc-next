import React from "react";
import styled from "styled-components";

export interface ProfileCardProps {
    title ?: string
}

export const ProfileCard: React.FunctionComponent<ProfileCardProps> = ({
    title
}) =>{
    return(
        <Stylewrapper>
           <h2 className="title">{title}</h2>
        </Stylewrapper>
    )
}

const Stylewrapper = styled.div`
    .title{
        color: var(--teal-dark);
    }
`
