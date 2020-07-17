import { GraphQLNonNull, GraphQLString, GraphQLList, GraphQLID } from 'graphql';

import ProductType from './purchase.graphql';
import { ImageSetInput, RatingInput, SizeInput } from '../common';
import { Product } from '../../models';


export default {
        addProduct: {
                type: ProductType,
                args: {
                        name: { type: new GraphQLNonNull(GraphQLString) },
                        categoryId: { type: new GraphQLNonNull(GraphQLID) },
                        subcategoryId: { type: new GraphQLNonNull(GraphQLID) },
                        size: { type: new GraphQLNonNull(SizeInput) },
                        description: { type: new GraphQLNonNull(GraphQLString) },
                        price: { type: new GraphQLNonNull(GraphQLFloat) },
                        images: { type: new GraphQLList(ImageSetInput) },
                        rating: { type: new GraphQLList(RatingInput) }
                },
                resolve(parent, {
                        name, categoryId, subcategoryId, size: { s, m, l, xl, xxl }, description, price, images, rating
                }) {
                        const product = new Product({
                                name,
                                categoryId,
                                subcategoryId,
                                size: {
                                        s,
                                        m,
                                        l,
                                        xl,
                                        xxl
                                },
                                description,
                                price,
                                images

                        });
                        return product.save()
                }
        },

}
