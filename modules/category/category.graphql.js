import graphql from 'graphql';
import Category from '../../models/category';

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLBoolean } = graphql;

const Category = new GraphQLObjectType({
        name: 'Category',
        fields: () => ({
                name: { type: new GraphQLNonNull(GraphQLString) },
                image: { type: new GraphQLNonNull(GraphQLString) },
                resolve(parent, args) {

                }
        }),
});

export default Category;