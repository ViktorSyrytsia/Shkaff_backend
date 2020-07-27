import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLID,
    GraphQLList,
} from 'graphql';

import {UserType, DeliveryType, DateScalar, PurchasedProductType} from '../types'

export const PurchaseType = new GraphQLObjectType({
    name: 'Purchase',
    fields: () => ({
        id: {type: new GraphQLNonNull(GraphQLID)},
        user: {
            type: UserType
        },
        delivery: {
            type: DeliveryType
        },
        connectionMethod: {type: new GraphQLNonNull(GraphQLString)},
        products: {
            type: new GraphQLList(PurchasedProductType)
        },
        status: {type: GraphQLString},
        createdAt: {type: DateScalar}
    }),
})
