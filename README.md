# SERVER PLANNER SERVICE

This repo contains solution to Server Planner Service Challenge.

## Overview
Services used:
 * Language [Node/Express](https://expressjs.com/)

 * Testing Framework [Jest](https://jest.com)

 * Built with [Docker](https://docker.com)

 ## Usage and Information

 * Fork or clone this repo. [Link] ()

 * Cd into the work folder appropriately.


Make sure you have installed Nodejs on your machine.

 ### Usage with Docker

 * To start the server on local:
 ``` 
 docker-compose up --build

 ```
 * To run the tests:
 ```
 docker-compose run server_planner_service-api npm test   

 ```

 ### Usage without Docker
* Installing dependencies
```
npm i
```

 * To start the server on local:

 ```
npm run build && npm start
 ```

* To run the tests

```
npm run test
```
## Hit the server

* Make a `POST` request to url `http://localhost:8080` with payload:

Sample Request Body :=>
```
{
    "server": {
        "CPU": 8,
        "RAM": 10,
        "HDD": 1024
    },
    "virtualMachines": [
        {
            "CPU": 2,
            "RAM": 4,
            "HDD": 256
        },
        {
            "CPU": 1,
            "RAM": 4,
            "HDD": 256
        },
         {
            "CPU": 4,
            "RAM": 8,
            "HDD": 256
        },
        {
            "CPU": 4,
            "RAM": 8,
            "HDD": 2048
        }
    ]
}
```



## Author

* **Jude Okafor**