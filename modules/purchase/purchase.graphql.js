import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLID,
} from 'graphql';

import {UserType, DeliveryType} from '../types'

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
    }),
})
