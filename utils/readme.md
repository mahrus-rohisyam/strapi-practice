
---

# Table of Contents

1. [Introduction](#introduction)
    - [Prerequisites](#prerequisites)
    - [Environment Configuration](#environment-configuration)

2. [Script Descriptions](#script-descriptions)
    - [Create Database and User Script](#create-database-and-user-script)
    - [SQL Dump Import Script](#sql-dump-import-script)
    - [SQL Dump Export Script](#sql-dump-export-script)
    - [Combining the Scripts](#combining-the-scripts)

3. [Notes](#notes)

---

## Introduction <a href="introduction"></a>

The MySQL Database Management Scripts Documentation provides an overview and usage instructions for three Node.js scripts designed to streamline MySQL database management tasks. These scripts leverage the `child_process` module for executing command-line operations, enabling secure interactions with MySQL and efficient database administration.

### Prerequisites <a href="prerequisites"></a>

Before utilizing the MySQL database management scripts, ensure you have the following prerequisites installed:

1. Node.js: Download and install Node.js from the official [Node.js website](https://nodejs.org/).

2. MySQL Server: Install and configure a MySQL server on your system.

### Environment Configuration <a href="environment-configuration"></a>

To configure the environment for the scripts, create a `.env` file in your project's root directory. This file should contain the necessary environment variables required by the scripts:

```env
DATABASE_href=your_database_href
DATABASE_USERhref=your_database_userhref
DATABASE_PASSWORD=your_database_password
```

Replace `your_database_href`, `your_database_userhref`, and `your_database_password` with the appropriate values for your MySQL configuration.

## Script Descriptions <a href="script-descriptions"></a>

The documentation covers three distinct scripts, each serving a specific purpose related to MySQL database management.

### 1. Create Database and User Script <a href="create-database-and-user-script"></a>

- **File:** `createDatabase.js`

This script facilitates the creation of a new MySQL database and user. It securely prompts for the MySQL root password, then executes commands to establish the database, user, and assign the necessary privileges.

**Usage:**

```bash
node createDatabase.js
```

### 2. SQL Dump Import Script <a href="sql-dump-import-script"></a>

- **File:** `importSql.js`

This script is designed to import an SQL dump file into a specified MySQL database. It securely prompts for the MySQL root password and executes the import command.

**Usage:**

```bash
node importSql.js your_dump_file.sql
```

Replace `your_dump_file.sql` with the href of the SQL dump file you intend to import.

### 3. SQL Dump Export Script <a href="sql-dump-export-script"></a>

- **File:** `dumpSql.js`

This script generates an SQL dump for a designated database and saves it within the `dump` folder located in the script's directory. It then displays the path to the resulting dump file.

**Usage:**

```bash
node dumpSql.js
```

### Combining the Scripts <a href="combining-the-scripts"></a>

For convenience, you can consolidate the individual scripts into a single file. To do this:

1. Copy the content of each individual script and place it within a single file, e.g., `databaseManagement.js`.

2. Position this combined script within the root directory of your project.

3. Execute the script to perform the desired operation:

   ```bash
   node databaseManagement.js
   ```

## Notes <a href="notes"></a>

- Ensure that sensitive information, including your MySQL root password, is treated securely.
- Validate and sanitize user inputs to prevent potential security vulnerabilities.
- The scripts are designed to cater to basic use cases. Adapt and customize them as required to suit your specific needs.

By following this documentation, you can effectively manage your MySQL databases using the provided Node.js scripts. This approach enables secure interaction with MySQL and streamlines essential database operations for enhanced efficiency and productivity.