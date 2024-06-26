import dotenv from 'dotenv';
dotenv.config();
export default {
    isProd: process.argv[2] == 'PROD',
}