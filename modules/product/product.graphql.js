import graphql from 'graphql';

import {Subcategory, Category, ImageSet} from '../../models';
import CategoryType from '../category/category.graphql';
import SubcategoryType from '../subcategory/subcategory.graphql';

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
} = graphql;

const ProductType = new GraphQLObjectType({
    name: 'Product',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: new GraphQLNonNull(GraphQLString)},
        category: {
            type: CategoryType,
            resolve: (parent) => Category.findById(parent.categoryId)
        },
        subcategory: {
            type: SubcategoryType,
            resolve: (parent) => Subcategory.findById(parent.subcategoryId)
        },
        size: {
            s: {type: new GraphQLNonNull(GraphQLInt)},
            m: {type: new GraphQLNonNull(GraphQLInt)},
            l: {type: new GraphQLNonNull(GraphQLInt)},
            xl: {type: new GraphQLNonNull(GraphQLInt)},
            xxl: {type: new GraphQLNonNull(GraphQLInt)},
        },
        description: {
            type: new GraphQLNonNull(GraphQLString)
        },
        price: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        images: {
            type: new GraphQLList(ImageSet)
        },
        rating: {
            type: new GraphQLNonNull(GraphQLInt)
        }
    }),
});

export default ProductType;
