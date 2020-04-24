import "dotenv/config";
import express from "express";
import http from "http";
import { AddressInfo } from "net";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import { connect } from "mongoose";

import { notFound, errorHandler } from "./middlewares";
import { DB_URI, PORT, HOST, CORS_ORIGIN } from "./configs";

(async () => {
  const app = express();
  const server = http.createServer(app);
  try {
    await connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to db");
  } catch (err) {
    console.log("unable to connect to db", err);
  }

  app.use(express.json());
  app.use(morgan("common"));
  app.use(helmet());
  app.use(
    cors({
      origin: CORS_ORIGIN,
    })
  );

  app.get("/", (_, res) =>
    res.json({
      message: "Hello World!",
    })
  );

  app.use(notFound);
  app.use(errorHandler);

  // explicitly state host for node to default to IPv4
  server.listen(parseInt(PORT!), HOST, () => {
    const { address } = server.address() as AddressInfo;
    console.log(`listening on port http://${address}:${PORT}`);
  });
})();
