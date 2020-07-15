import { GraphQLObjectType, GraphQLSchema } from 'graphql';

import { CategoryQueries, CategoryMutations, SubcategoryQueries, SubcategoryMutations } from './graphqlExports';

const Mutation = new GraphQLObjectType({
        name: 'Mutation',
        fields: {
                setCategory: {
                        ...CategoryMutations.setCategory
                },
                setSubcategory: {
                        ...SubcategoryMutations.setSubcategory
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
                subcategory: {
                        ...SubcategoryQueries.getSubcategory
                },
                subcategories: {
                        ...SubcategoryQueries.getSubcategories
                }
        }
});

export default new GraphQLSchema({
        query: Query,
        mutation: Mutation,
})
