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
        user: User
        priority: Priority
        status: Status
        assigned_to_user: User
    }
`
export const resolvers = {
    Query: {
        tickets: async () =>db.tickets.findAll(),
        ticket: async (parent,args) => db.tickets.findByPk(args.id),
    },
    //relations by accessing the parent of tickets
    Ticket : {
        user: async (parent) => db.users.findByPk(parent.user_id),
        
        priority: async (parent) => db.priorities.findByPk(parent.priority_id),

        status: async(parent) => db.status.findByPk(parent.status_id),

        
        assigned_to_user: async (parent) => db.users.findByPk(parent.assigned_to_user_id),
    },
}