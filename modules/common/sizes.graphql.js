import {
        GraphQLInputObjectType,
        GraphQLNonNull,
        GraphQLObjectType,
        GraphQLInt
} from "graphql";

export const SizesInput = new GraphQLInputObjectType({
        name: 'SizesInput',
        fields: () => ({
                s: { type: new GraphQLNonNull(GraphQLInt) },
                m: { type: new GraphQLNonNull(GraphQLInt) },
                l: { type: new GraphQLNonNull(GraphQLInt) },
                xl: { type: new GraphQLNonNull(GraphQLInt) },
                xxl: { type: new GraphQLNonNull(GraphQLInt) },
        })
})

export const SizesType = new GraphQLObjectType({
        name: 'Sizes',
        fields: () => ({
                s: { type: new GraphQLNonNull(GraphQLInt) },
                m: { type: new GraphQLNonNull(GraphQLInt) },
                l: { type: new GraphQLNonNull(GraphQLInt) },
                xl: { type: new GraphQLNonNull(GraphQLInt) },
                xxl: { type: new GraphQLNonNull(GraphQLInt) },
        })
})
