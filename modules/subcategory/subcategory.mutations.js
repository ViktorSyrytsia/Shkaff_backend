import { GraphQLNonNull, GraphQLString, GraphQLID } from 'graphql';

import SubcategoryType from './subcategory.graphql';
import { Subcategory } from '../../models';

export default {
        setSubcategory: {
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
                resolve(parent, { id }) {
                        return Subcategory.findByIdAndRemove(id);
                }
        },
        updateSubcategory: {
                type: SubcategoryType,
                args: {
                        id: { type: GraphQLID },
                        name: { type: new GraphQLNonNull(GraphQLString) },
                        categoryId: { type: new GraphQLNonNull(GraphQLID) },
                },
                resolve(parent, { id, name, categoryId }) {
                        return Subcategory.findByIdAndUpdate(
                                id,
                                { $set: { name, categoryId } },
                                { new: true },
                        );
                },
        },
}
