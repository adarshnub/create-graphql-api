import { gql } from 'apollo-server-express'
import  db from '../database'

export const typeDefs = gql`
    extend type Query {
        priorities: [Priority]
        priority(id: ID!) : Priority
    }
    type Priority {
        id: ID!
        slug: String
        name: String
        
    }
`
export const resolvers = {
    Query: {
        priorities: async () =>db.priorities.findAll(),
        priority: async (parent,args,context,info) => db.priorities.findByPk(args.id),
    },
}