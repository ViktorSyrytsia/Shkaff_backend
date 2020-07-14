import graphql from 'graphql';

import { Subcategory, Category } from '../../models';

const {
        GraphQLObjectType,
        GraphQLString,
        GraphQLSchema,
        GraphQLID,
        GraphQLInt,
        GraphQLList,
        GraphQLNonNull,
        GraphQLBoolean
} = graphql;

const ProductType = new GraphQLObjectType({
        name: 'Product',
        fields: () => ({
                name: { type: new GraphQLNonNull(GraphQLString) },
                image: { type: new GraphQLNonNull(GraphQLString) },
        }),
});

export default ProductType;