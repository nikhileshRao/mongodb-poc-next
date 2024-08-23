import { mongoConnection } from "../basic.service";

export const getDriverList = async (userID:string, mongoPW:string, projectName:string, dbName:string , collection:string) => {
    const data = await mongoConnection(userID, mongoPW, projectName, dbName, collection);

    const driversListProps = data[0]?.drivers
    return driversListProps;
}