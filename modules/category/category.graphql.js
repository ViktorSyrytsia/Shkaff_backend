import {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull, GraphQLList} from 'graphql';

import {SubcategoryType, ProductType} from "../types";
import {Subcategory, Product} from '../../models'

export const CategoryType = new GraphQLObjectType({
        name: 'Category',
        fields: () => ({
                id: { type: GraphQLID },
                name: { type: new GraphQLNonNull(GraphQLString) },
                image: { type: GraphQLString },
                subcategories: {
                        type: new GraphQLList(SubcategoryType),
                        resolve: (parent) => Subcategory.find({categoryId: parent.id})
                },
                products: {
                        type: new GraphQLList(ProductType),
                        resolve: (parent) => Product.find({categoryId: parent.id})
                }
        }),
});

