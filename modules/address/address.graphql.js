import {
    GraphQLInputObjectType,
    GraphQLString,
} from 'graphql';

const AddressInput = new GraphQLInputObjectType({
    name: 'AddressInput',
    fields: {
        street: {type: GraphQLString},
        built: {type: GraphQLString},
        apartment: {type: GraphQLString},
    }
})

export default AddressInput;
