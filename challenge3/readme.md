Repository Untuk Challange 3

Step for making Challange 3

Make Rest API with Express

1. Create new folder
2. Init node project, by running command:
    `npm init -y` or `yarn init`
3. Create http server using express
    - Install express, by running command: 
        `npm install express`
    - Create new js main file (index.js)
        - Dont forget to import express
        - Create express application
        - Start listen
4. Run http server, by running command
    `node index.js`
    - To make it auto restarting, we can use nodemon
        - install nodemon: `npm install nodemon`
        - To run http server using nodemon: `nodemon index.js`
        - To run it via custom script, we can add it in package.json file
            - Add new script with command: `nodemon index.js`
            - For example, inside scripts: "start" : "nodemon index.js"
            - To run custom script: `npm run start`
5. Add request handler for url GET '/'
6. To add default routing, we can add url "*". It will catch all not found routes

//Add REST API
1. List
    - GET <collection url>, no request body, response json
        - For example: GET /feeds
2. Get Detail
    - GET <resource url>, no request body, need path parameter, response json
        - For example: GET /feeds/:id

