import {GraphQLID, GraphQLNonNull, GraphQLString} from 'graphql';

import {CategoryType} from './category.graphql';
import {Category, Subcategory} from '../../models';

export default {
    addCategory: {
        type: CategoryType,
        args: {
            name: {type: new GraphQLNonNull(GraphQLString)},
            image: {type: new GraphQLNonNull(GraphQLString)}
        },
        resolve(parent, {name, image, subcategories}) {
            const category = new Category({
                name,
                image,
                subcategories
            });
            return category.save()
        }
    },
    updateCategory: {
        type: CategoryType,
        args: {
            id: {type: GraphQLID},
            name: {type: new GraphQLNonNull(GraphQLString)},
            image: {type: GraphQLString},
        },
        resolve(parent, {id, name, image}) {
            return Category.findByIdAndUpdate(
                id,
                {$set: {name, image}},
                {new: true}
            );
        }
    },
    deleteCategory: {
        type: CategoryType,
        args: {id: {type: GraphQLID}},
        resolve: (parent, args) => {
            Category.findByIdAndRemove(args.id)
        }
    },
}

//Subcategory.remove({categoryId: args.id}).exec()
