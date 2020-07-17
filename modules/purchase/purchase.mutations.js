import { GraphQLNonNull, GraphQLString, GraphQLInt } from 'graphql';

import PurchaseType from './purchase.graphql';
import { Purchase } from '../../models';


export default {
        addPurchase: {
                type: PurchaseType,
                args: {
                        user: {
                                name: { type: new GraphQLNonNull(GraphQLString) },
                                surname: { type: new GraphQLNonNull(GraphQLString) },
                                email: { type: new GraphQLNonNull(GraphQLString) },
                                phone: { type: new GraphQLNonNull(GraphQLString) },
                        },
                        connectionMethod: { type: new GraphQLNonNull(GraphQLString) },
                        deliveryMethod: {
                                method: { type: new GraphQLNonNull(GraphQLString) },
                                city: { type: new GraphQLNonNull(GraphQLString) },
                                postOffice: { type: GraphQLInt },
                                address: {
                                        street: { type: GraphQLString },
                                        built: { type: GraphQLInt },
                                        apartment: { type: GraphQLInt },
                                }
                        },
                        resolve(parent, { user: { name, surname, email, phone }, connectionMethod, deliveryMethod: { method, city, postOffice, address: { street, built, apartment } } }) {
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
                                                street,
                                                built,
                                                apartment
                                        }
                                });
                                return purchase.save()
                        }
                },
        }
}
