import { GraphQLObjectType, GraphQLSchema } from 'graphql';

import { CategoryMutations, SubcategoryMutations, PurchaseMutation } from '../modules/mutations';
import { CategoryQueries, SubcategoryQueries, PurchaseQueries } from '../modules/queries';

const Mutation = new GraphQLObjectType({
        name: 'Mutation',
        fields: {
                setCategory: {
                        ...CategoryMutations.setCategory
                },
                setSubcategory: {
                        ...SubcategoryMutations.setSubcategory
                },
                deleteSubcategory: {
                        ...SubcategoryMutations.setSubcategory
                },
                updateSubcategory: {
                        ...SubcategoryMutations.setSubcategory
                }

        }
})

const Query = new GraphQLObjectType({
        name: 'Query',
        fields: {
                getCategory: {
                        ...CategoryQueries.getCategory
                },
                getCategories: {
                        ...CategoryQueries.getCategories
                },
                getSubcategory: {
                        ...SubcategoryQueries.getSubcategory
                },
                getSubcategories: {
                        ...SubcategoryQueries.getSubcategories
                },

        }
});

export default new GraphQLSchema({
        query: Query,
        mutation: Mutation,
})
