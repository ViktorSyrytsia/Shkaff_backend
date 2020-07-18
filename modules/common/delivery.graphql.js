import {
    GraphQLInputObjectType,
    GraphQLObjectType,
    GraphQLString
} from "graphql";

import {AddressInput, AddressType} from './index'

export const DeliveryInput = new GraphQLInputObjectType({
    name: 'DeliveryInput',
    fields: () => ({
        method: {type: GraphQLString},
        city: {type: GraphQLString},
        postOffice: {type: GraphQLString},
        address: {
            type: AddressInput
        }
    })
})

export const DeliveryType = new GraphQLObjectType({
    name: 'Delivery',
    fields: () => ({
        method: {type: GraphQLString},
        city: {type: GraphQLString},
        postOffice: {type: GraphQLString},
        address: {
            type: AddressType
        }
    })
})
