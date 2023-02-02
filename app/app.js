import '@babel/polyfill';
import express from 'express';
import http from "http";
const bodyParser = require('body-parser')
const { ApolloServer } = require('apollo-server-express')
const cors = require('cors')


//creates the express application
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())


 //create apollo server instance
let apolloServer = null; //
async function startServer() {
    apolloServer = new ApolloServer({  //create new instance of apollo server
        modules: [
            require('./GraphQL/tickets'),
            require('./GraphQL/status'),
            require('./GraphQL/users'),
            require('./GraphQL/priorities'),
        ],
    })
    await apolloServer.start();       //start apollo Server
    //apply Apollo middleware to express app
    apolloServer.applyMiddleware({ app,
        path: '/',
        cors: true,
        });
}
startServer();
const httpserver = http.createServer(app);

app.get('/', (req, res) => res.send('Hello World!'))
//express server startup
app.listen({ port: 5000 }, () =>
    console.log(`🚀 Server ready at http://localhost:5000`),
)
















