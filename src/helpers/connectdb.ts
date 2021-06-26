import { getConnection, createConnection } from "typeorm";
import config from '../common/ormconfig';
import { recordingLogs, recordingErrors } from '../logger/logger';

const connectionDB = async () => {
    let connection;
    try {
        recordingLogs("********************************************");
        connection = getConnection();

    } catch (err) {
        // add error handle
        recordingLogs("Сonnection has not been established yet... need to wait");
    }

    try {
        if (connection) {
            if (!connection.isConnected) await connection.connect();
        } else {
            await createConnection(config);
        }
        recordingLogs(`Connection to DB to port ${process.env['POSTGRES_PORT']}`);
    } catch (err) {
        recordingErrors(err, 'Connection error...');
        // process.exit(1);
    }
};

// const expConnectToDB = async (cb: () => void) => {
//     try {
//         await connectionDB();
//         cb();
//     } catch (err) {
//         console.log("DB CONNECTION ERROR", err)
//     }
// };
export { connectionDB };
