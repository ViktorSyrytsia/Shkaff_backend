import {GraphQLID} from 'graphql';

import {ProductType} from '../types';
import {Product} from '../../models';

export default {
        getProduct: {
                type: ProductType,
                args: { id: { type: GraphQLID } },
                resolve: (parent, args) => Product.findById(args.id)
        }
}
