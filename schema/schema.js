import graphql from 'graphql';

import CategoryQueries from "../modules/category/category.queries";
import CategoryMutations from "../modules/category/category.mutations";

const {GraphQLObjectType, GraphQLSchema} = graphql;

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        setCategory: {
            ...CategoryMutations.setCategory
        }
    }
})

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        category: {
            ...CategoryQueries.getCategory
        },
        categories: {
            ...CategoryQueries.getCategories
        },
    }
});

export default new GraphQLSchema({
    query: Query,
    mutation: Mutation,
})
