import {
        GraphQLInputObjectType,
        GraphQLString,
        GraphQLNonNull,
        GraphQLInt

} from 'graphql';

const deliveryMethod = new GraphQLInputObjectType({
        name: 'DeliveryMethod',
        fields: {
                method: { type: new GraphQLNonNull(GraphQLString) },
                city: { type: new GraphQLNonNull(GraphQLString) },
                postOffice: { type: GraphQLInt },
                address: {
                        type: GraphQLInputObjectType,
                        street: { type: GraphQLString },
                        built: { type: GraphQLInt },
                        apartment: { type: GraphQLInt },
                }
        }
})

export default deliveryMethod;