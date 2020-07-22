import { GraphQLObjectType, GraphQLSchema } from 'graphql';

import {
    CategoryMutations,
    SubcategoryMutations,
    PurchaseMutation,
    ProductMutation
} from '../modules/mutations';
import {
    CategoryQueries,
    SubcategoryQueries,
    PurchaseQueries,
    ProductQueries
} from '../modules/queries';

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addCategory: {
            ...CategoryMutations.addCategory
        },
        updateCategory: {
            ...CategoryMutations.updateCategory
        },
        deleteCategory: {
            ...CategoryMutations.deleteCategory
        },
        addSubcategory: {
            ...SubcategoryMutations.addSubcategory
        },
        deleteSubcategory: {
            ...SubcategoryMutations.deleteSubcategory
        },
        updateSubcategory: {
            ...SubcategoryMutations.updateSubcategory
        },
        addPurchase: {
            ...PurchaseMutation.addPurchase
        },
        deletePurchase: {
            ...PurchaseMutation.deletePurchase
        },
        updatePurchaseStatus: {
            ...PurchaseMutation.updatePurchaseStatus
        },
        addProduct: {
            ...ProductMutation.addProduct,
        },
        updateProduct: {
            ...ProductMutation.updateProduct
        },
        deleteProduct: {
            ...ProductMutation.deleteProduct
        },
        updateProductRating: {
            ...ProductMutation.updateProductRating
        },
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
        getPurchase: {
            ...PurchaseQueries.getPurchase
        },
        getPurchases: {
            ...PurchaseQueries.getPurchases
        },
        getProduct: {
            ...ProductQueries.getProduct
        },
        getProducts: {
            ...ProductQueries.getProducts
        },
    }
});

export default new GraphQLSchema({
    query: Query,
    mutation: Mutation,
})
