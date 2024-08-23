// Default NextJS imports
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';

//importing components
import { ProfileCard } from "../../Components/profile-card/profileCard";
import styled from "styled-components";

//Services
import { mongoConnection } from "../../services/basic.service"

const driverslist: NextPage = (props: any) => {
    const { driverslist } = props;
    return(
        <Stylewrapper className='drivers-list'>
            <ProfileCard {...driverslist}/>
        </Stylewrapper>
    )
}

const Stylewrapper = styled.div`
   &.drivers-list{
        
    }
`

export const getStaticProps: GetStaticProps = async () =>{
    const page = "drivers";
    const data = mongoConnection(
        process.env.NEXT_PUBLIC_CLIENT_ID as string ,
        process.env.NEXT_PUBLIC_CLIENT_PASSWORD as string,
        process.env.NEXT_PUBLIC_CLIENT_PROJECT as string,
        process.env.NEXT_PUBLIC_CLIENT_DBNAME as string,
        page 
    );

    const obj ={
        "firstName": "Max",
        "lastName" : "Verstappen",
        "image" : {
            "url":"https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png",
            "alt": "Max Verstappen"
        },
        "constructor" : "Red Bull Racing"
    }
    return {
        props:{
            driverslist: obj || null
        }
    }
}

export default driverslist;