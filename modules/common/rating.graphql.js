import {
        GraphQLObjectType,
        GraphQLNonNull,
        GraphQLInt,
        GraphQLInputObjectType
} from 'graphql';

export const RatingType = new GraphQLObjectType({
        name: 'Rating',
        fields: () => ({
                value: { type: GraphQLInt },
        }),
});

export const RatingInput = new GraphQLInputObjectType({
        name: 'RatingInput',
        fields: () => ({
                value: { type: new GraphQLNonNull(GraphQLInt) }
        }),
});
