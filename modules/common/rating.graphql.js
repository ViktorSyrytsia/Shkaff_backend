import {
        GraphQLObjectType,
        GraphQLNonNull,
        GraphQLInt,
        GraphQLID,
        GraphQLInputObjectType
} from 'graphql';

export const RatingType = new GraphQLObjectType({
        name: 'Rating',
        fields: () => ({
                id: { type: GraphQLID },
                value: { type: GraphQLInt },
        }),
});

export const RatingInput = new GraphQLInputObjectType({
        name: 'RatingInput',
        fields: () => ({
                value: { type: new GraphQLNonNull(GraphQLInt) }
        }),
});
