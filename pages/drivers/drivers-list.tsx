// Default NextJS imports
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';

//importing components
import { ProfileCard } from "../../Components/profile-card/profileCard";
import { Header } from "../../Components/header/header";

//Service,config and dependencies
import styled from "styled-components";
import config from "../../config/config.json";
import { getDriverList } from "../../services/drivers-list/drivers-list.service";


const driverslist: NextPage = (props: any) => {
    const { driverslistProps } = props;
    return(
        <Stylewrapper className='drivers-list'>
            <Header headerlogo={config?.header?.icon}/>
            <div className='drivers-list-profile'>
                {driverslistProps.map((driver : any, key: any) => (
                    <ProfileCard {...driver} key={key}/>
                ))}
            </div>
        </Stylewrapper>
    )
}

const Stylewrapper = styled.div`
   &.drivers-list{
        .drivers-list-profile{
            margin-top: 2%;
            @media (min-width: 992px) {
                display: flex;
                flex-direction: row;
                gap: 3%;
            }
            .profilecard{
                margin: 0 auto;
                margin-top: 10%;
                @media (min-width: 992px) {
                    margin: unset;
                }
            }
        }
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