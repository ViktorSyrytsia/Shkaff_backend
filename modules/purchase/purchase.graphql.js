import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLID,

} from 'graphql';

const PurchaseType = new GraphQLObjectType({
    name: 'Purchase',
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLID) },
        data: { type: new GraphQLNonNull(GraphQLString) },
    }),
})

export default PurchaseType;
