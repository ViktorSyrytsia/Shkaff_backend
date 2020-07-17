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
        id: { type: new GraphQLNonNull(GraphQLID) },
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
            s: GraphQLString,
            m: GraphQLString,
            l: GraphQLString,
            xl: GraphQLString,
            xll: GraphQLString,
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
