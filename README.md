# Currency Converter

## Description
A currency converter API that converts bill of currency from one currency to another.

## Prerequisites
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [SonarCloud](https://sonarcloud.io/) account and token

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/furher023/prakhar_currency_converter.git
    cd prakhar_currency_converter
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

## Running the Code
To start the application, run:
```sh
npm run start:dev
```

## Running Tests
To run the tests, use:
```sh
npm run test
```

## Checking Test Coverage
To check the test coverage, run:
```sh
npm run test:cov
```

This will generate a coverage report in the `coverage` directory. Open `index.html` in a browser to view the detailed report.

## Running SonarCloud Analysis
1. Ensure you have a SonarCloud account and a project set up.
2. Add your SonarCloud token to your environment variables:
    ```sh
    export SONAR_TOKEN=your_sonarcloud_token
    ```
3. Install the SonarQube Scanner using npm:
    ```sh
    npm install -g sonarqube-scanner
    ```
4. Run the SonarCloud analysis, replace the project key and the organization with the one in your project:
    ```sh
    sonar-scanner \
    -Dsonar.organization=prakhar-currency-converter \
    -Dsonar.projectKey=prakhar-currency-converter_project \
    -Dsonar.sources=. \
    -Dsonar.host.url=https://sonarcloud.io 
    ```
5. Running this will generate a report on the sonar cloud dashboard in your project

6. Here is the link to the latest analysis: https://sonarcloud.io/dashboard?id=prakhar-currency-converter_project

## API Documentation

### Authentication
All API requests must include an API key for authentication. Include the API key in the `x-api-key` header. The API_KEY is present in the .env file.

### Endpoint 1: `POST /api/calculate`
**Description:** Calculates the bill.

**Request:**
- Headers: 
  - `Content-Type: application/json`
  - `x-api-key: <your_api_key>`
- Body:
  ```json
  {
    "userType": "EMPLOYEE",
    "tenure": 5,
    "billItems": [
      {
        "name": "Laptop",
        "category": "ELECTRONICS",
        "totalPrice": 1000
      },
      {
        "name": "Shirt",
        "category": "CLOTHING",
        "totalPrice": 50
      }
    ],
    "originalCurrency": "USD",
    "targetCurrency": "EUR",
    "totalBillAmount": 1050
  }
  ```
**Valid Input Values:**
- `userType`: 
  - `EMPLOYEE`
  - `AFFILIATE`
  - `CUSTOMER`
- `billItems.category`: 
  - `ELECTRONICS`
  - `CLOTHING`
  - `HOME_APPLIANCES`
  - `BOOKS`
  - `TOYS`
  - `BEAUTY_PRODUCTS`
  - `SPORTS_EQUIPMENT`
  - `FURNITURE`
  - `JEWELRY`
  - `AUTOMOTIVE`
  - `PET_SUPPLIES`
  - `OFFICE_SUPPLIES`
  - `GARDEN_SUPPLIES`
  - `MUSIC_INSTRUMENTS`
  - `VIDEO_GAMES`
  - `HEALTH_PRODUCTS`
  - `BABY_PRODUCTS`
  - `GROCERIES`
- `originalCurrency`: 
  - `3 letter currency code`
- `targetCurrency`: 
  - `3 letter currency code`

**Response:**
- Status: `200 OK`
- Body:
  ```json
  {
    "totalBillAmount": 950,
    "currencyCode": "EUR"
  }
  ```
