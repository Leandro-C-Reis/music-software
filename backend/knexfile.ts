import path from 'path';

module.exports = {
    client: 'mysql2',
    
    connection : {
        host: 'localhost',
        user: 'root',
        password: 'Econ#123',
        database: 'musicapp'
    },

    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },

    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },

    useNullAsDefault: true
};