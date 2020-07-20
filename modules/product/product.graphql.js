import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLID,
    GraphQLFloat,
    GraphQLInputObjectType
} from 'graphql';

import {Subcategory, Category} from '../../models';
import {
    CategoryType,
    SubcategoryType,
    ImageSetType,
    SizesType,
    RatingType,
    SizesInput,
    RatingInput,
    ImageSetInput
} from '../types';

export const ProductType = new GraphQLObjectType({
    name: 'Product',
    fields: () => ({
        id: {type: new GraphQLNonNull(GraphQLID)},
        name: {type: GraphQLString},
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
            type: GraphQLString
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

export const ProductInput = new GraphQLInputObjectType({
    name: 'ProductInput',
    fields: () => ({
        name: {type: new GraphQLNonNull(GraphQLString)},
        categoryId: {type: new GraphQLNonNull(GraphQLID)},
        subcategoryId: {type: new GraphQLNonNull(GraphQLID)},
        sizes: {
            type: new GraphQLNonNull(SizesInput)
        },
        description: {type: new GraphQLNonNull(GraphQLString)},
        price: {
            type: new GraphQLNonNull(GraphQLFloat)
        },
        images: {
            type: new GraphQLList(ImageSetInput)
        },
        rating: {
            type: new GraphQLList(RatingInput)
        }
    }),
});
