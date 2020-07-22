import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLID, GraphQLBoolean,
} from 'graphql';

import {UserType, DeliveryType, DateScalar} from '../types'

export const PurchaseType = new GraphQLObjectType({
    name: 'Purchase',
    fields: () => ({
        id: {type: new GraphQLNonNull(GraphQLID)},
        user: {
            type: UserType
        },
        connectionMethod: {type: new GraphQLNonNull(GraphQLString)},
        deliveryMethod: {
            type: DeliveryType
        },
        status: {type: GraphQLBoolean},
        createdAt: {type: DateScalar}
    }),
})
