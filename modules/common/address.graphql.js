import {
    GraphQLInputObjectType,
    GraphQLObjectType,
    GraphQLString
} from "graphql";

export const AddressInput = new GraphQLInputObjectType({
    name: 'AddressInput',
    fields: () => ({
        street: {type: GraphQLString},
        built: {type: GraphQLString},
        apartment: {type: GraphQLString},
    })
})

export const AddressType = new GraphQLObjectType({
    name: 'Address',
    fields: () => ({
        street: {type: GraphQLString},
        built: {type: GraphQLString},
        apartment: {type: GraphQLString},
    })
})
