import {GraphQLNonNull, GraphQLString} from 'graphql';

import PurchaseType from './purchase.graphql';
import {DeliveryInput, UserInput} from '../common';
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
}
