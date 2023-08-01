# WiderCircleTest

This project is a test task using Next.js, MongoDB, and MySQL. It illustrates how to structure a project with microservices in Next.js. 

## Prerequisites

You will need the following tools installed on your computer:

- [Node.js](https://nodejs.org/en/) v14 or above
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [MySQL/PlanetScale](https://planetscale.com/)
- [Prisma](https://www.prisma.io/)

## Setup

To run this project, follow these steps:

1. **Clone the repository**

    Using SSH:
    ```bash
    git clone git@github.com:Radzell/WiderCircleTest.git
    ```

    Using HTTPS:
    ```bash
    git clone https://github.com/Radzell/WiderCircleTest.git
    ```

2. **Install dependencies**

    Navigate to the root directory of the project, then install the dependencies:

    Using yarn:
    ```bash
    yarn install
    ```

    Using npm:
    ```bash
    npm install
    ```

3. **Set up environment variables**

    The project requires environment variables. Copy the example `.env` file:

    ```bash
    cp .env.example .env.local
    ```

    Then, fill in the necessary variables in the `.env` file.

4. **Start the development server**

    Start the server with either yarn or npm:

    Using yarn:
    ```bash
    yarn dev
    ```

    Using npm:
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

5. **Generating Schema and Migrating the Database**

Before running the application, you need to generate the Prisma schema and migrate the database. Prisma is a modern database toolkit that allows you to interact with databases using a type-safe API. To generate the Prisma schema and migrate your database, follow these steps:

 - `Generate the Prisma Schema`

    To generate the Prisma schema, run the following script:

    ```bash
    yarn generate:schema
    ```

    This script will generate the Prisma client and schema files based on the defined schema files in the `lib/server/dbs` directory. The Prisma client provides a type-safe database client for querying your database.

  - `Migrate the Database`

    To migrate the database and apply any pending changes, run the following script:

    ```bash
    yarn generate:migrate
    ```

## Weather API Key

This application requires an API key from the Weather API. Follow these steps to get one:

1. Visit the [Weather API website](https://weatherapi.com/).

2. If you don't have an account, sign up for a free one. If you do, log in.

3. Once you are logged in, navigate to your dashboard.

4. Your API key should be visible on your dashboard, or under a section named "API Keys." 

5. Copy the key and paste it into your `.env.local` file in this format:
    ```
    WEATHER_API_KEY=your_api_key_here
    ```
   Replace `your_api_key_here` with the API key you obtained from the Weather API.


## Scripts

The project uses the following scripts:

- `dev`: Start the development server.
- `build`: Build the production version of the app.
- `start`: Start the production server.
- `generate:schema`: Generate Prisma client and schema files.
- `generate:migrate`: Push database changes with Prisma.

## Dependencies


The project uses the following main dependencies:

- [@chakra-ui/next-js](https://github.com/chakra-ui/chakra-ui/tree/main/packages/next): Chakra UI components for Next.js.
- [@chakra-ui/react](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react): Chakra UI components for React.
- [@prisma/client](https://www.prisma.io/docs/concepts/components/prisma-client): Prisma client for database access.
- [mongodb](https://mongodb.github.io/node-mongodb-native/): MongoDB driver for Node.js.
- [next](https://nextjs.org/): React framework for building server-side rendered and static websites.
- [react](https://reactjs.org/): JavaScript library for building user interfaces.
- [react-dom](https://reactjs.org/docs/react-dom.html): Entry point for working with the DOM in React applications.

Please refer to the \`package.json\` file for a full list of all dependencies and devDependencies.
