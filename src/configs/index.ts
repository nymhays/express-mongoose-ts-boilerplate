export const {
    NODE_ENV = process.env.NODE_ENV,
  
    PORT = process.env.PORT,
    HOST = process.env.HOST,
    CORS_ORIGIN = process.env.CORS_ORIGIN,
  
    DB_USERNAME = process.env.DB_USERNAME,
    DB_PASSWORD = process.env.DB_PASSWORD,
    DB_HOST = process.env.DB_HOST,
    DB_NAME = process.env.DB_NAME,
  } = process.env;
  
  // This is for Atlas cloud DB not local instance
  export const DB_URI = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;
  
  export const DB_OPTIONS = { useNewUrlParser: true, useUnifiedTopology: true };
  