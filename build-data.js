require('source-map-support').install();

const dotenv = require("dotenv");

dotenv.config();

require("./tsc-dist/lib/run-queries").main().catch(e => {
  console.log(e);
  process.exit(1);
});
