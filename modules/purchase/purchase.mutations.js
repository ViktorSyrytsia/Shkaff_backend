import {GraphQLBoolean, GraphQLID, GraphQLList, GraphQLNonNull, GraphQLString} from 'graphql';

import {
    DeliveryInput,
    UserInput,
    PurchaseType, ImageSetInput, PurchasedProductInput
} from '../types';
import {Purchase} from '../../models';

export default {
    addPurchase: {
        type: PurchaseType,
        args: {
            user: {
                type: UserInput
            },
            delivery: {
                type: DeliveryInput
            },
            connectionMethod: {type: new GraphQLNonNull(GraphQLString)},
            products: {  type: new GraphQLList(PurchasedProductInput)}
        },
        resolve(parent, {
            user: {name, surname, email, phone},
            delivery: {method, city, postOffice, address: {street, built, apartment}},
            connectionMethod,
            products,
        }) {
            const purchase = new Purchase({
                user: {
                    name,
                    surname,
                    email,
                    phone
                },
                delivery: {
                    method,
                    city,
                    postOffice,
                    address: {
                        street,
                        built,
                        apartment
                    }
                },
                connectionMethod,
                products
            });
            return purchase.save()
        }
    },
    updatePurchaseStatus: {
        type: PurchaseType,
        args: {
            id: {type: new GraphQLNonNull(GraphQLID)},
            status: {type: GraphQLString}
        },
        resolve(parent, {
            id,
            status
        }) {
            return Purchase.findOneAndUpdate(
                {_id: id},
                {status: status},
                {returnOriginal: false}
            );
        }
    },
    deletePurchase: {
        type: PurchaseType,
        args: { id: { type: GraphQLID } },
        resolve: (parent, args) => Purchase.findByIdAndRemove(args.id)
    },
}
