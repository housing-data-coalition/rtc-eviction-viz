require('source-map-support').install();

const dotenv = require("dotenv");

dotenv.config();

require("./tsc-dist/run-queries").main().catch(e => {
  console.log(e);
  process.exit(1);
});