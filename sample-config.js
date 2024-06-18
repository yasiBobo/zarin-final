require('dotenv').config(); // Load environment variables from .env file

module.exports = {
    db: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || 'password',
        database: process.env.DB_NAME || 'my_database'
    },
    server: {
        port: process.env.PORT || 443
    }
};
