import { GraphQLObjectType, GraphQLSchema } from 'graphql';

import { CategoryMutations, SubcategoryMutations, PurchaseMutation } from '../modules/mutations';
import { CategoryQueries, SubcategoryQueries, PurchaseQueries } from '../modules/queries';

const Mutation = new GraphQLObjectType({
        name: 'Mutation',
        fields: {
                setCategory: {
                        ...CategoryMutations.setCategory
                },
                updateCategory: {
                        ...CategoryMutations.updateCategory
                },
                deleteCategory: {
                        ...CategoryMutations.deleteCategory
                },
                setSubcategory: {
                        ...SubcategoryMutations.setSubcategory
                },
                deleteSubcategory: {
                        ...SubcategoryMutations.deleteSubcategory
                },
                updateSubcategory: {
                        ...SubcategoryMutations.updateSubcategory
                }

                /*   addPurchase: {
                           ...PurchaseMutation.addPurchase
                   }*/
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

                /*       getPurchase: {
                               ...PurchaseQueries.getPurchase
                       },
                       getPurchases: {
                               ...PurchaseQueries.getPurchases
                       }*/
        }
});

export default new GraphQLSchema({
        query: Query,
        mutation: Mutation,
})
