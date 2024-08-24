import { MongoClient } from 'mongodb';

export const mongoConnection = async (userID:string, mongoPW:string, projectName:string, dbName:string , collection:string) => {
    const mongoClient = new MongoClient(
        `mongodb+srv://${userID}:${mongoPW}@${projectName}.b7fqg.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=${projectName}`
    );

    const data = await mongoClient.db().collection(collection).find({}).toArray();
    return data   
}