import {GraphQLBoolean, GraphQLID, GraphQLNonNull, GraphQLString} from 'graphql';

import {
    DeliveryInput,
    UserInput,
    PurchaseType
} from '../types';
import {Purchase} from '../../models';

export default {
    addPurchase: {
        type: PurchaseType,
        args: {
            user: {
                type: UserInput
            },
            connectionMethod: {type: new GraphQLNonNull(GraphQLString)},
            deliveryMethod: {
                type: DeliveryInput
            },
        },
        resolve(parent, {
            user: {name, surname, email, phone},
            connectionMethod,
            deliveryMethod: {method, city, postOffice, address: {street, built, apartment}}
        }) {
            const purchase = new Purchase({
                user: {
                    name,
                    surname,
                    email,
                    phone
                },
                connectionMethod,
                deliveryMethod: {
                    method,
                    city,
                    postOffice,
                    address: {
                        street,
                        built,
                        apartment
                    }
                }
            });
            return purchase.save()
        }
    },
    updatePurchaseStatus: {
        type: PurchaseType,
        args: {
            id: {type: new GraphQLNonNull(GraphQLID)},
            status: {type: GraphQLBoolean}
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
