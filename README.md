# SERVER PLANNER SERVICE

This repo contains solution to Server Planner Service Challenge.

## Problem Statement
                                                      
Write an API that calculates the server hardware for a data center (to host virtual machines).
Your API should return the number of servers that are required to host a non-empty collection of virtual machines.
This means you should implement the following operation (in UML definition):
+calculate(serverType: Server, virtualMachines: VirtualMachine[1..*]): int
All servers are from the same type. This type defines the hardware resources each server provides: CPU, RAM, HDD.
Each virtual machine is defined by the virtual hardware resources it needs (on a server): CPU, RAM, HDD.
The algorithm for the virtual machine distribution should implement a 'first fit' strategy.
This means there is no resource optimisation or 'look back': Virtual machines are always allocated on the current or the next server (in case of limited resources).
If a virtual machine is too 'big' for a new server, skip it.

------------------------------------------------------------------------------
Example:
Server type = {CPU: 2, RAM: 32, HDD: 100}
Virtual Machines = [{CPU: 1, RAM: 16, HDD: 10}, {CPU: 1, RAM: 16, HDD: 10}, {CPU: 2, RAM: 32, HDD: 100}]
Result = 2

------------------------------------------------------------------------------
General Requirements:

Create a rest API service, in any language of your choice
Ensure the service runs in Docker
The code should contain ReadMe on how to run the service
Your submission should compile and run successfully
Free choice of dependencies, but keep it simple
Your code should be fully (unit) tested!
Endeavor to write clean, maintainable code.

## Overview
Services used:
 * Language [Node/Express](https://expressjs.com/)

 * Testing Framework [Jest](https://jest.com)

 * Built with [Docker](https://docker.com)

 ## Usage and Information

 * Fork or clone this [repo](https://github.com/judeokafor/server_planner_service.git).

 * Cd into the work folder appropriately

 ### Usage with Docker

 * To start the server on local:

 ``` 
 docker-compose up --build

 ```

 * To run the tests:

 ```
 docker-compose run server_planner_service-api npm test   

 ```

 * To stop the server:

 ```
 docker-compose stop   

 ```

 ### Usage without Docker

*NOTE:* `Make sure you have installed Nodejs on your machine.`

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

Sample Response Body :=> 
```
{
    "message": "Successfully calculated server capacity",
    "status": "Success",
    "data": {
        "capacity": 3
    }
}

```



## Author

* **Jude Okafor**