require("dotenv").config();

const config = {
  dev: process.env.NODE_ENV !== "production",
  port: process.env.PORT,
  urlML: process.env.URL_BASE_ML,
  author: { name: process.env.NAME, lastName: process.env.LAST_NAME }
};

module.exports = { config };
