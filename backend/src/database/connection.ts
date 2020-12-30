import knex from 'knex';

const connection = knex({
    client: 'mysql2',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'Econ#123',
        database: 'musicapp',
        port: 3306
    },

    useNullAsDefault: true
});

export default connection;