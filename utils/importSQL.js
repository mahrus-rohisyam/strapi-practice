const { execSync } = require("child_process");
const fs = require("fs");
require("dotenv").config();

const importSql = async (dumpFileName) => {
  console.log(`Importing SQL from ${dumpFileName}...`);

  const dumpPath = `${__dirname}/dump/${dumpFileName}`;
  const importCmd = `mysql -u root -p ${process.env.DATABASE_NAME} < ${dumpPath}`;

  try {
    execSync(importCmd, { stdio: "inherit" });
    console.log(`SQL imported successfully from ${dumpFileName}`);
  } catch (error) {
    console.error("Error importing SQL:", error);
  }
};

const dumpFileName = process.argv[2];

if (!dumpFileName) {
  console.error("Please provide the name of the SQL dump file.");
} else {
  importSql(dumpFileName);
}
