Current Stock level identifier.
=============================


## Description
This project manages stock levels by reading the initial stock quantities and applying subsequent transactions to calculate the current stock levels for different SKUs.

## Getting Started

### Prerequisites
Ensure you have Node.js installed on your system to run the project and npm for managing the dependencies.

### Installation
Clone the repository and install dependencies with the following commands:

```sh
git clone https://github.com/rizvanhaider/active-stock-test.git
cd active-stock-test
npm install

```


## Running the Project

Execute the project with:

```
npm start
```
This command starts the server, and the application begins listening for requests on `http://localhost:3000`.

## Usage

### Checking Stock Levels
With the server running, you can check the stock level of an SKU by navigating to:

```
 http://localhost:3000/stock/{SKU}
```
Replace `{SKU}` with the actual SKU identifier, e.g., `MQO013465/10/41`.

## Scripts

The following npm scripts are available for development and testing:

`npm run start` - Starts the server.
`npm run clean` - Clears the Jest cache, removes coverage data, and deletes transpiled files.
`npm run build` - Compiles TypeScript code to ES2016.
`npm run test` - Executes the test suites.