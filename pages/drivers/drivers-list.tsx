// Default NextJS imports
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';

//importing components
import { ProfileCard } from "../../Components/profile-card/profileCard";
import styled from "styled-components";

//Services
import { getDriverList } from "../../services/drivers-list/drivers-list.service"

const driverslist: NextPage = (props: any) => {
    const { driverslistProps } = props;
    return(
        <Stylewrapper className='drivers-list'>
            <ProfileCard {...driverslistProps}/>
        </Stylewrapper>
    )
}

const Stylewrapper = styled.div`
   &.drivers-list{
        
    }
`

export const getStaticProps: GetStaticProps = async () =>{
    const page = "drivers";
    const driversListPage = await getDriverList(
        process.env.NEXT_PUBLIC_CLIENT_ID as string ,
        process.env.NEXT_PUBLIC_CLIENT_PASSWORD as string,
        process.env.NEXT_PUBLIC_CLIENT_PROJECT as string,
        process.env.NEXT_PUBLIC_CLIENT_DBNAME as string,
        page 
    );

    return {
        props:{
            driverslistProps: driversListPage || null
        }
    }
}

export default driverslist;