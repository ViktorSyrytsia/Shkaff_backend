import {GraphQLID} from 'graphql';

import ProductType from './product.graphql';
import {Product} from '../../models';

export default {
        getProduct: {
                type: ProductType,
                args: { id: { type: GraphQLID } },
                resolve: (parent, args) => Product.findById(args.id)
        }
}
