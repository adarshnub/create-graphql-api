import { gql } from 'apollo-server-express'
import  db from '../database'

export const typeDefs = gql`
    extend type Query {
        status: [status]
        status(id: ID!) : Status
    }
    type Status {
        id: ID!
        name: String
        email: String
        
    }
`
export const resolvers = {
    Query: {
        status: async () =>db.users.findAll(),
        status: async (obj,args,context,info) => db.users.findByPk(args.id),
    },
}