// Default NextJS imports
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';

//import configs
import config from "../../config/config.json";

//Services
import { mongoConnection } from "../../services/basic.service"
import { IntegerType } from 'mongodb';

const driverslist: NextPage = (props: any) => {
    return(
        <div>
            test
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () =>{
    const page = "drivers";
    const data = mongoConnection(
        process.env.NEXT_PUBLIC_CLIENT_ID as string ,
        process.env.NEXT_PUBLIC_CLIENT_PASSWORD as string,
        process.env.NEXT_PUBLIC_CLIENT_PROJECT as string,
        process.env.NEXT_PUBLIC_CLIENT_DBNAME as string,
        page 
    );
    return {
        props:{
            driverslist: "test" || null
        }
    }
}

export default driverslist;