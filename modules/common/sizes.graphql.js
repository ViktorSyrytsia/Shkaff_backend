import {
        GraphQLInputObjectType,
        GraphQLObjectType,
        GraphQLInt
} from "graphql";

export const SizesInput = new GraphQLInputObjectType({
        name: 'SizesInput',
        fields: () => ({
                xs: { type: GraphQLInt },
                s: { type: GraphQLInt },
                m: { type: GraphQLInt },
                l: { type: GraphQLInt },
                xl: { type: GraphQLInt },
                xxl: { type: GraphQLInt }
        })
})

export const SizesType = new GraphQLObjectType({
        name: 'Sizes',
        fields: () => ({
                xs: { type: GraphQLInt },
                s: { type: GraphQLInt },
                m: { type: GraphQLInt },
                l: { type: GraphQLInt },
                xl: { type: GraphQLInt },
                xxl: { type: GraphQLInt }
        })
})
