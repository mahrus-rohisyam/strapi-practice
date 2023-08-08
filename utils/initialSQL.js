const readline = require("readline");
const { execSync } = require("child_process");
const read = require("read");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const createDatabase = async () => {
  console.log("Creating a new database and user...");

  // Use 'read' to securely prompt for MySQL root password
  read(
    {
      prompt: "Enter MySQL root password: ",
      silent: true, // Hide user input
      replace: "*", // Replace input with '*' characters
    },
    (error, rootPassword) => {
      if (error) {
        console.error("Error:", error);
        rl.close();
        return;
      }

      // Create database and user
      const createDatabaseCmd = `mysql -u root -p${rootPassword} -e "CREATE DATABASE IF NOT EXISTS \`${process.env.DATABASE_NAME}\`; CREATE USER IF NOT EXISTS '${process.env.DATABASE_USERNAME}'@'localhost' IDENTIFIED BY '${process.env.DATABASE_PASSWORD}'; GRANT ALL PRIVILEGES ON \`${process.env.DATABASE_NAME}\`.* TO '${process.env.DATABASE_USERNAME}'@'localhost'; FLUSH PRIVILEGES;"`;

      try {
        execSync(createDatabaseCmd, {
          stdio: "inherit",
          input: rootPassword + "\n",
        });
        console.log("Database and user created successfully.");
      } catch (error) {
        console.error("Error creating database and user:", error);
      }

      rl.close();
    }
  );
};

if (
  !process.env.DATABASE_NAME ||
  !process.env.DATABASE_USERNAME ||
  !process.env.DATABASE_PASSWORD
) {
  console.error(
    "One or more environment variables are missing. Please make sure DATABASE_NAME, DATABASE_USERNAME, and DATABASE_PASSWORD are set in your .env file."
  );
} else {
  createDatabase();
}