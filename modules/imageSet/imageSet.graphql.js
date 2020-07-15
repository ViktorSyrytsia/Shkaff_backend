import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from 'graphql';

const ImageSetType = new GraphQLObjectType({
        name: 'ImageSet',
        fields: () => ({
                id: { type: GraphQLString },
                link: { type: new GraphQLNonNull(GraphQLString) },
        }),
});

export default ImageSetType;
