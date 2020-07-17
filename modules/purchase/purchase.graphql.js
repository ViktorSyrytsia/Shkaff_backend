import {
    GraphQLInputObjectType,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLInt,
    GraphQLID,

} from 'graphql';

import user from '../user/user.graphql';
import deliveryMethod from './deliveryMethod.graphql';

const PurchaseType = new GraphQLObjectType({
    name: 'Purchase',
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLID) },
        user,
        connectionMethod: { type: new GraphQLNonNull(GraphQLString) },
        deliveryMethod,
    }),
})

export default PurchaseType;
