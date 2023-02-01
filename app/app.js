import '@babel/polyfill';
import express from 'express';
import http from "http";
const bodyParser = require('body-parser')
const { ApolloServer } = require('apollo-server-express')
const cors = require('cors')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

// const server = new ApolloServer({
//     modules: [
//         require('./GraphQL/tickets'),
//         require('./GraphQL/status'),
//         require('./GraphQL/users'),
//         require('./GraphQL/priorities'),
//     ],
// })

// const text = server.applyMiddleware({ app })
// console.log(text);
 
let apolloServer = null;
async function startServer() {
    apolloServer = new ApolloServer({
        modules: [
            require('./GraphQL/tickets'),
            require('./GraphQL/status'),
            require('./GraphQL/users'),
            require('./GraphQL/priorities'),
        ],
    })
    await apolloServer.start();
    apolloServer.applyMiddleware({ app,
        path: '/',
        cors: true,
        });
}
startServer();
const httpserver = http.createServer(app);

app.get('/', (req, res) => res.send('Hello World!'))

app.listen({ port: 5000 }, () =>
    console.log(`🚀 Server ready at http://localhost:5000`),
)
















