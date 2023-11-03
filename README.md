Current Stock level identifier.
=============================


### Description
This project reads the stock quantity at certiain time and transactions performed after certain time are then aggergated and new stock level is identified.

### Usage
To clone this repository use the following command

```sh
git clone https://github.com/rizvanhaider/active-stock-test.git
cd active-stock-test
npm install
```

to run the project 

## Available Scripts

- `start` - to run the project,
- `clean` - remove coverage data, Jest cache and transpiled files,
- `build` - transpile TypeScript to es2016,
- `test` - run tests

## check Stock level

after `npm start` the project following route is exposed which accepts `sku` as parameter.

```
http://localhost:3000/stock-level?sku=MQO013465/10/41

```