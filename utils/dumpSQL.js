const readline = require("readline");
const { execSync } = require("child_process");
const fs = require("fs");
require("dotenv").config();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getCurrentTimestamp = () => {
  const now = new Date();
  const timestamp = now.toISOString().replace(/[-T:Z]/g, "");
  return timestamp;
};

const dumpSql = async () => {
  console.log("Dumping SQL database...");

  const currentTimestamp = getCurrentTimestamp();
  const dumpFileName = `${currentTimestamp}_${process.env.DATABASE_NAME}.sql`;
  const dumpPath = `${__dirname}/dump/${dumpFileName}`; // Use __dirname
  const dumpCmd = `mysqldump -u root -p -d ${process.env.DATABASE_NAME} > ${dumpPath}`;

  try {
    execSync(dumpCmd, { stdio: "inherit" });
    console.clear();
    console.log(`SQL dumped to \n\n>>>>> ${dumpPath} <<<<<`);
    console.log('\nHave a good day! bye\n\nRuss')
    rl.close();
  } catch (error) {
    console.error("Error dumping SQL:", error);
  }
};

if (!process.env.DATABASE_NAME) {
  console.error(
    "DATABASE_NAME environment variable is missing. Please make sure DATABASE_NAME is set in your .env file."
  );
} else {
  dumpSql();
}
