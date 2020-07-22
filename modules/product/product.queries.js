import {GraphQLID, GraphQLList} from 'graphql';

import {CategoryType, ProductType} from '../types';
import {Category, Product} from '../../models';

export default {
        getProduct: {
                type: ProductType,
                args: { id: { type: GraphQLID } },
                resolve: (parent, args) => Product.findById(args.id)
        },
        getProducts: {
                type: new GraphQLList(ProductType),
                resolve: () => Product.find({}),
        }
}
