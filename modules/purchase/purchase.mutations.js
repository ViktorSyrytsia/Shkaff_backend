import { GraphQLNonNull, GraphQLString } from 'graphql';

import PurchaseType from './purchase.graphql';
import { Purchase } from '../../models';


export default {
        addPurchase: {
                type: PurchaseType,
                args: {
                        data: { type: new GraphQLNonNull(GraphQLString) }
                },
                resolve(parent, args) {
                        const purchase = new Purchase({
                                data: args.data
                        });
                        return purchase.save()
                }
        },
}

