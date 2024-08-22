import React from "react";
import styled from "styled-components";

export interface ProfileCardProps {
    title ?: string
}

export const ProfileCard: React.FunctionComponent<ProfileCardProps> = ({
    title
}) =>{
    return(
        <div>
            {title}
        </div>
    )
}

const Stylewrapper = styled.div`
    
`
