import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLInt
} from 'graphql';

const PurchaseType = new GraphQLObjectType({
    name: 'Purchase',
    fields: () => ({
        id: { type: GraphQLString },
        user: {
            name: { type: new GraphQLNonNull(GraphQLString) },
            surname: { type: new GraphQLNonNull(GraphQLString) },
            email: { type: new GraphQLNonNull(GraphQLString) },
            phone: { type: new GraphQLNonNull(GraphQLString) },
        },
        connectionMethod: { type: GraphQLString },
        deliveryMethod: {
            method: { type: new GraphQLNonNull(GraphQLString) },
            city: { type: GraphQLString },
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
