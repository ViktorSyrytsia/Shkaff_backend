import {GraphQLNonNull, GraphQLString} from 'graphql';

import CategoryType from './category.graphql';
import {Category} from '../../models';

export default {
    setCategory: {
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
}
