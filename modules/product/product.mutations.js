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

            /*name: {type: new GraphQLNonNull(GraphQLString)},
            categoryId: {type: new GraphQLNonNull(GraphQLID)},
            subcategoryId: {type: new GraphQLNonNull(GraphQLID)},
            sizes: {type: SizesInput},
            description: {type: GraphQLString},
            price: {type: new GraphQLNonNull(GraphQLFloat)},
            images: {type: new GraphQLList(ImageSetInput)},
            rating: {type: new GraphQLList(RatingInput)}*/
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
    updateProduct: {
        type: ProductType,
        args: {
            product: {
                type: ProductInput
            }
   /*         id: {type: new GraphQLNonNull(GraphQLID)},
            name: {type: new GraphQLNonNull(GraphQLString)},
            categoryId: {type: new GraphQLNonNull(GraphQLID)},
            subcategoryId: {type: new GraphQLNonNull(GraphQLID)},
            sizes: {type: SizesInput},
            description: {type: GraphQLString},
            price: {type: new GraphQLNonNull(GraphQLFloat)},
            images: {type: new GraphQLList(ImageSetInput)},
            rating: {type: new GraphQLList(RatingInput)}*/
        },
        resolve(parent, {
            id,
            name,
            categoryId,
            subcategoryId,
            sizes: {s, m, l, xl, xxl},
            description,
            price,
            images,
            rating
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
    },

}
