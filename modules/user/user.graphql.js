import {
        GraphQLInputObjectType,
        GraphQLString,
        GraphQLNonNull,
} from 'graphql';

const UserInput = new GraphQLInputObjectType({
        name: 'UserInput',
        fields: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                surname: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
                phone: { type: new GraphQLNonNull(GraphQLString) },
        }
})

export default UserInput;
