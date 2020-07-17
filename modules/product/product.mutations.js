import {
    GraphQLNonNull,
    GraphQLString,
    GraphQLList,
    GraphQLID,
    GraphQLFloat
} from 'graphql';

import ProductType from './product.graphql';
import {ImageSetInput, RatingInput, SizesInput} from '../common';
import {Product} from '../../models';

export default {
    addProduct: {
        type: ProductType,
        args: {
            name: {type: new GraphQLNonNull(GraphQLString)},
            categoryId: {type: new GraphQLNonNull(GraphQLID)},
            subcategoryId: {type: new GraphQLNonNull(GraphQLID)},
            sizes: {type: new GraphQLNonNull(SizesInput)},
            description: {type: new GraphQLNonNull(GraphQLString)},
            price: {type: new GraphQLNonNull(GraphQLFloat)},
            images: {type: new GraphQLList(ImageSetInput)},
            rating: {type: new GraphQLList(RatingInput)}
        },
        resolve(parent, {
            name,
            categoryId,
            subcategoryId,
            sizes: {s, m, l, xl, xxl},
            description,
            price,
            images,
            rating
        }) {
            const product = new Product({
                name,
                categoryId,
                subcategoryId,
                sizes: {
                    s,
                    m,
                    l,
                    xl,
                    xxl
                },
                description,
                price,
                images,
                rating
            });
            return product.save()
        }
    },

}
