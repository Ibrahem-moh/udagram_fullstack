import * as dotenv from "dotenv";
dotenv.config();

// ENV variables
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

export const config = {
  username: `${process.env.POSTGRES_USER}`,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  port: Number(process.env.PORT),
  db_port: Number(process.env.DB_PORT),
  host: process.env.POSTGRES_HOST,
  dialect: "postgres",
  aws_region: process.env.AWS_REGION,
  aws_profile: process.env.AWS_PROFILE,
  aws_media_bucket: process.env.AWS_BUCKET,
  url: process.env.URL,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};

// POSTGRES_HOST=localhost
// POSTGRES_PORT=5432
// DB_PORT=5432
// POSTGRES_DB=udagram
// POSTGRES_USER=postgres
// POSTGRES_PASSWORD=postgres
// AWS_REGION=XXXXXXXX
// AWS_PROFILE=XXXXXXXX
// AWS_BUCKET=XXXXXXXX
// AWS_ACCESS_KEY_ID=XXXXXXXX
// AWS_SECRET_ACCESS_KEY=XXXXXXXX
// AWS_S3_ENDPOINT=XXXXXXXX
// URL=localhost:8080
