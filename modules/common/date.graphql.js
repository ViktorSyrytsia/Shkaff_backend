import {GraphQLObjectType, GraphQLScalarType} from "graphql";

export const DateScalar = new GraphQLScalarType({
    name: 'Date',
    parseValue: new Date(),
})
