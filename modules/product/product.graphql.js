import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLID,
    GraphQLFloat
} from 'graphql';

import { Subcategory, Category } from '../../models';
import { CategoryType, SubcategoryType } from '../types';
import { ImageSetType, SizesType, RatingType } from '../common';

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
        sizes: {
            type: new GraphQLNonNull(SizesType)
        },
        description: {
            type: new GraphQLNonNull(GraphQLString)
        },
        price: {
            type: new GraphQLNonNull(GraphQLFloat)
        },
        images: {
            type: new GraphQLList(ImageSetType)
        },
        rating: {
            type: new GraphQLList(RatingType)
        }
    }),
});

export default ProductType;
