import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLID, GraphQLList,
} from 'graphql';

import {Category, Product} from '../../models';
import {ProductType, CategoryType} from "../types";

export const SubcategoryType = new GraphQLObjectType({
    name: 'Subcategory',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: new GraphQLNonNull(GraphQLString) },
        category: {
            type: CategoryType,
            resolve: (parent) => Category.findById(parent.categoryId)
        },
        products: {
            type: new GraphQLList(ProductType),
            resolve: (parent) => Product.find({subcategoryId: parent.id})
        }
    }),
})
