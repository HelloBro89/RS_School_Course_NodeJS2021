import dotenv from 'dotenv';
import path from 'path';


dotenv.config({
    path: path.join(__dirname, '../../.env'),
});

// need to add variable
export default {
    "type": "???",
    "host": "???",
    "port": "???",
    "username": "???",
    "password": "???",
    "database": "???"
}