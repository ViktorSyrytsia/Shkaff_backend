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
<<<<<<< HEAD
                deleteSubcategory: {
                        ...SubcategoryMutations.setSubcategory
                },
                updateSubcategory: {
                        ...SubcategoryMutations.setSubcategory
                }

=======
             /*   addPurchase: {
                        ...PurchaseMutation.addPurchase
                }*/
>>>>>>> 048890df4cb106b001b28465bb7e0b6b6f8ecbba
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
<<<<<<< HEAD

=======
         /*       getPurchase: {
                        ...PurchaseQueries.getPurchase
                },
                getPurchases: {
                        ...PurchaseQueries.getPurchases
                }*/
>>>>>>> 048890df4cb106b001b28465bb7e0b6b6f8ecbba
        }
});

export default new GraphQLSchema({
        query: Query,
        mutation: Mutation,
})
