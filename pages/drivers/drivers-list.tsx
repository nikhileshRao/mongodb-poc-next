// Default NextJS imports
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';

//extras
import { MongoClient } from 'mongodb';

const driverslist: NextPage = (props: any) => {
    return(
        <div>
            test
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () =>{

    const mongoClient = new MongoClient(
        'mongodb+srv://nikhilesh3208:YhHVeEkHZaxNgYkO@f1drivers.b7fqg.mongodb.net/formula1?retryWrites=true&w=majority&appName=f1drivers'
    );

    const data = await mongoClient.db().collection('drivers').find({}).toArray();

    console.log("the data is " , data[0])


    return {
        props:{
            driverslist: "test"
        }
    }
}

export default driverslist;