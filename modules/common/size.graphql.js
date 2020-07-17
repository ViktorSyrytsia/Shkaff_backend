import {
        GraphQLInputObjectType,
        GraphQLNonNull,
        GraphQLObjectType
} from "graphql";

export const SizeInput = new GraphQLInputObjectType({
        name: 'SizeInput',
        fields: () => ({
                s: { type: new GraphQLNonNull(GraphQLInt) },
                m: { type: new GraphQLNonNull(GraphQLInt) },
                l: { type: new GraphQLNonNull(GraphQLInt) },
                xl: { type: new GraphQLNonNull(GraphQLInt) },
                xxl: { type: new GraphQLNonNull(GraphQLInt) },

        })
})

export const Size = new GraphQLObjectType({
        name: 'Size',
        fields: () => ({
                s: { type: new GraphQLNonNull(GraphQLInt) },
                m: { type: new GraphQLNonNull(GraphQLInt) },
                l: { type: new GraphQLNonNull(GraphQLInt) },
                xl: { type: new GraphQLNonNull(GraphQLInt) },
                xxl: { type: new GraphQLNonNull(GraphQLInt) },

        })
})
