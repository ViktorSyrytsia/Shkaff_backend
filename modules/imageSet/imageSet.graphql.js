import graphql from 'graphql';

const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = graphql;

const ImageSetType = new GraphQLObjectType({
        name: 'ImageSet',
        fields: () => ({
                id: { type: GraphQLString },
                link: { type: new GraphQLNonNull(GraphQLString) },
        }),
});

export default ImageSetType;
