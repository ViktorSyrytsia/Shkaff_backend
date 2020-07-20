import {
    GraphQLNonNull,
    GraphQLString,
    GraphQLList,
    GraphQLID,
    GraphQLFloat, GraphQLInt, GraphQLInputObjectType
} from 'graphql';

import {
    ImageSetInput,
    RatingInput,
    SizesInput,
    ProductType,
    ProductInput
} from '../types';
import {Product} from '../../models';

export default {
    addProduct: {
        type: ProductType,
        args: {
            product: {
                type: ProductInput
            }
        },
        resolve(parent, {
            product: {
                name,
                categoryId,
                subcategoryId,
                sizes: {s, m, l, xl, xxl},
                description,
                price,
                images,
                rating
            }
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
    updateProduct: {
        type: ProductType,
        args: {
            id: {type: new GraphQLNonNull(GraphQLID)},
            product: {
                type: ProductInput
            }
        },
        resolve(parent, {
            id,
            product: {
                name,
                categoryId,
                subcategoryId,
                sizes: {s, m, l, xl, xxl},
                description,
                price,
                images,
                rating
            }
        }) {
            return Product.findByIdAndUpdate(
                id,
                {
                    $set: {
                        name,
                        categoryId,
                        subcategoryId,
                        sizes: {s, m, l, xl, xxl},
                        description,
                        price,
                        images,
                        rating
                    }
                },
                {new: true}
            );
        }
    },
    updateProductRating: {
        type: ProductType,
        args: {
            id: {type: new GraphQLNonNull(GraphQLID)},
            rate: {type: GraphQLInt}
        },
        resolve(parent, {
            id,
            rate
        }) {
            return Product.findOneAndUpdate(
                {_id: id},
                {$push: {rating: {value: rate}}},
                {returnOriginal: false}
            );
        }
    }
}
