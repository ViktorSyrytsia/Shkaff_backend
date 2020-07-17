import {
        GraphQLObjectType,
        GraphQLNonNull,
        GraphQLInt
} from 'graphql';

export const RatingType = new GraphQLObjectType({
        name: 'Rating',
        fields: () => ({
                id: { type: GraphQLID },
                value: { type: GraphQLInt },
        }),
});

export const RatingInput = new GraphQLObjectType({
        name: 'RatingInput',
        fields: () => ({
                value: { type: new GraphQLNonNull(GraphQLInt) }
        }),
});
