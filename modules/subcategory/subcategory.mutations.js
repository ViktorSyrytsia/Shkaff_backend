import { GraphQLNonNull, GraphQLString, GraphQLID } from 'graphql';

import {SubcategoryType} from '../types';
import { Subcategory } from '../../models';

export default {
        addSubcategory: {
                type: SubcategoryType,
                args: {
                        name: { type: new GraphQLNonNull(GraphQLString) },
                        categoryId: { type: GraphQLID }
                },
                resolve(parent, { name, categoryId }) {
                        const subcategory = new Subcategory({
                                name,
                                categoryId
                        });
                        return subcategory.save()
                }
        },
        deleteSubcategory: {
                type: SubcategoryType,
                args: { id: { type: GraphQLID } },
                resolve: (parent, args) => Subcategory.findByIdAndRemove(args.id)
        },
        updateSubcategory: {
                type: SubcategoryType,
                args: {
                        id: { type: GraphQLID },
                        name: { type: new GraphQLNonNull(GraphQLString) },
                },
                resolve(parent, { id, name }) {
                        return Subcategory.findByIdAndUpdate(
                                id,
                                { $set: { name } },
                                { new: true },
                        );
                },
        },
}
