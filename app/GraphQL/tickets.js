import { gql } from 'apollo-server-express'
import  db from '../database'

export const typeDefs = gql`
    extend type Query {
        tickets: [Ticket]
        ticket(id: ID!) : Ticket
    }
    type Ticket {
        id: ID!
        subject: String
        priority_id: Int
        status_id: Int
        user_id: Int
        assigned_to_user_id: Int
    }
`
export const resolvers = {
    Query: {
        tickets: async () =>db.tickets.findAll(),
        ticket: async (obj,args,context,info) => db.tickets.findByPk(args.id),
    },
}