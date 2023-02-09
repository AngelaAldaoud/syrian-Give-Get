const config = {
  app: {
    node_local_port: process.env.NODE_LOCAL_PORT,

  },
  db: {
    db_host: process.env.DB_HOST,
    db_name: process.env.DB_NAME,
    db_user: process.env.DB_USER,
    db_password: process.env.DB_PASSWORD,
    db_port: process.env.DB_PORT,
  },
};

module.exports = config;
