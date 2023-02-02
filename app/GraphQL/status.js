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
        statuses: async () =>db.status.findAll(),
        status: async (parent,args) => db.status.findByPk(args.id),
    },
}