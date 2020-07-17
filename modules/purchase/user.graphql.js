import {
        GraphQLInputObjectType,
        GraphQLString,
        GraphQLNonNull,

} from 'graphql';

const user = new GraphQLInputObjectType({
        name: 'User',
        fields: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                surname: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
                phone: { type: new GraphQLNonNull(GraphQLString) },
        }
})

export default user;