import { gql } from 'apollo-server-express'
import  db from '../database'

export const typeDefs = gql`
    extend type Query {
        statuses: [Status]
        status(id: ID!): Status
    }
    type Status {
        id: ID!
        slug: String
        name: String
        
    }
`
export const resolvers = {
    Query: {
        statuses: async () =>db.users.findAll(),
        status: async (obj,args,context,info) => db.users.findByPk(args.id),
    },
}