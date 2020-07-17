import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLInt,
    GraphQLID
} from 'graphql';

const PurchaseType = new GraphQLObjectType({
    name: 'Purchase',
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLID) },
        user: {
            name: { type: new GraphQLNonNull(GraphQLString) },
            surname: { type: new GraphQLNonNull(GraphQLString) },
            email: { type: new GraphQLNonNull(GraphQLString) },
            phone: { type: new GraphQLNonNull(GraphQLString) },
        },
        connectionMethod: { type: new GraphQLNonNull(GraphQLString) },
        deliveryMethod: {
            method: { type: new GraphQLNonNull(GraphQLString) },
            city: { type: new GraphQLNonNull(GraphQLString) },
            postOffice: { type: GraphQLInt },
            address: {
                street: { type: GraphQLString },
                built: { type: GraphQLInt },
                apartment: { type: GraphQLInt },
            }
        }
    }),
})

export default PurchaseType;
