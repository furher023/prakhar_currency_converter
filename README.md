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
    git clone https://github.com/yourusername/your-repo.git
    cd your-repo
    ```

2. Install dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

## Running the Code
To start the application, run:
```sh
npm start
# or
yarn start
```

## Running Tests
To run the tests, use:
```sh
npm test
# or
yarn test
```

## Checking Test Coverage
To check the test coverage, run:
```sh
npm run coverage
# or
yarn coverage
```

This will generate a coverage report in the `coverage` directory. Open `index.html` in a browser to view the detailed report.

## Running SonarCloud Analysis
1. Ensure you have a SonarCloud account and a project set up.
2. Add your SonarCloud token to your environment variables:
    ```sh
    export SONAR_TOKEN=your_sonarcloud_token
    ```

3. Run the SonarCloud analysis:
    ```sh
    npm run sonar
    # or
    yarn sonar
    ```

## API Documentation

### Authentication
All API requests must include an API key for authentication. Include the API key in the `x-api-key` header.

### Endpoint 1: `GET /api/resource`
**Description:** Fetches a list of resources.

**Request:**
- Headers: 
  - `x-api-key: <your_api_key>`
- Query Parameters:
  - `page` (optional): Page number for pagination.
  - `limit` (optional): Number of items per page.

**Response:**
- Status: `200 OK`
- Body:
  ```json
  {
    "data": [
      {
        "id": "1",
        "name": "Resource 1",
        "description": "Description of Resource 1"
      },
      {
        "id": "2",
        "name": "Resource 2",
        "description": "Description of Resource 2"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 50
    }
  }
  ```

### Endpoint 2: `POST /api/resource`
**Description:** Creates a new resource.

**Request:**
- Headers: 
  - `Content-Type: application/json`
  - `x-api-key: <your_api_key>`
- Body:
  ```json
  {
    "name": "New Resource",
    "description": "Description of the new resource"
  }
  ```

**Response:**
- Status: `201 Created`
- Body:
  ```json
  {
    "id": "3",
    "name": "New Resource",
    "description": "Description of the new resource"
  }
  ```

### Endpoint 3: `PUT /api/resource/:id`
**Description:** Updates an existing resource.

**Request:**
- Headers: 
  - `Content-Type: application/json`
  - `x-api-key: <your_api_key>`
- Body:
  ```json
  {
    "name": "Updated Resource",
    "description": "Updated description of the resource"
  }
  ```

**Response:**
- Status: `200 OK`
- Body:
  ```json
  {
    "id": "3",
    "name": "Updated Resource",
    "description": "Updated description of the resource"
  }
  ```

### Endpoint 4: `DELETE /api/resource/:id`
**Description:** Deletes a resource.

**Request:**
- Headers: 
  - `x-api-key: <your_api_key>`

**Response:**
- Status: `204 No Content`

## Contributing
Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
```

Make sure to replace placeholders like `yourusername`, `your-repo`, and `your_api_key` with actual values relevant to your project. Additionally, ensure that the scripts (`start`, `test`, `coverage`, `sonar`) are defined in your `package.json` file.
```
