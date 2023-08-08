module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'strapi-cms'),
      user: env('DATABASE_USERNAME', 'strapi-cms'),
      password: env('DATABASE_PASSWORD', 'STRAPI_CMS#2023'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
