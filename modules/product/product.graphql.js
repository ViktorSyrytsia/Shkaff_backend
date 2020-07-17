import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
} from 'graphql';

import {Subcategory, Category} from '../../models';
import {CategoryType, SubcategoryType} from '../types';
import {ImageSetType, ImageSetInput} from '../common';

const ProductType = new GraphQLObjectType({
    name: 'Product',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: new GraphQLNonNull(GraphQLString) },
        category: {
            type: CategoryType,
            resolve: (parent) => Category.findById(parent.categoryId)
        },
        subcategory: {
            type: SubcategoryType,
            resolve: (parent) => Subcategory.findById(parent.subcategoryId)
        },
        size: {
            s: { type: new GraphQLNonNull(GraphQLInt) },
            m: { type: new GraphQLNonNull(GraphQLInt) },
            l: { type: new GraphQLNonNull(GraphQLInt) },
            xl: { type: new GraphQLNonNull(GraphQLInt) },
            xxl: { type: new GraphQLNonNull(GraphQLInt) },
        },
        description: {
            type: new GraphQLNonNull(GraphQLString)
        },
        price: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        images: {
            type: new GraphQLList(ImageSetType)
        },
        rating: {
            type: new GraphQLNonNull(GraphQLInt)
        }
    }),
});

export default ProductType;
