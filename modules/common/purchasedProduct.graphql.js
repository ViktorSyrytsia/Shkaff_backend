import {
    GraphQLInputObjectType,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLID
} from "graphql";

export const PurchasedProductInput = new GraphQLInputObjectType({
    name: 'PurchasedProductInput',
    fields: () => ({
        name: {type: GraphQLString},
        category: {type: GraphQLString},
        subcategory: {type: GraphQLString},
        price: {type: GraphQLInt},
        size: {type: GraphQLString},
        quantity: {type: GraphQLInt, defaultValue: 1},
    })
})

export const PurchasedProductType = new GraphQLObjectType({
    name: 'PurchasedProduct',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        category: {type: GraphQLString},
        subcategory: {type: GraphQLString},
        price: {type: GraphQLInt},
        size: {type: GraphQLString},
        quantity: {type: GraphQLInt},
    })
})
