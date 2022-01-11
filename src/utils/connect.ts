import mongoose from "mongoose";
import config from "config";
import logger from "./logger";

const connect = async () => {
  const dbUrl = config.get<string>("dbUrl");

  try {
    await mongoose.connect(dbUrl);
    logger.info("Database connected");
  } catch (error) {
    logger.error("could not connect to database");
    process.exit(1);
  }
};

export default connect;
