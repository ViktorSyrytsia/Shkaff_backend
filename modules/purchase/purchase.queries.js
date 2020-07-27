import { GraphQLList, GraphQLID } from 'graphql';

import {PurchaseType} from '../types';
import { Purchase } from '../../models';

export default {
        getPurchase: {
                type: PurchaseType,
                args: { id: { type: GraphQLID } },
                resolve: (parent, args) => Purchase.findById(args.id)
        },
        getPurchases: {
                type: new GraphQLList(PurchaseType),
                resolve: () => Purchase.find({}),
        }
}
