module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'market-db'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'market-db'),
        username: env('DATABASE_USERNAME', 'dev'),
        password: env('DATABASE_PASSWORD', 'dev'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
