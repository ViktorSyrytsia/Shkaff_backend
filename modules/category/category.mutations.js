import { GraphQLNonNull, GraphQLString } from 'graphql';

import CategoryType from './category.graphql';
import { Category } from '../../models';

export default {
    setCategory: {
        type: CategoryType,
        args: {
            name: { type: new GraphQLNonNull(GraphQLString) },
            image: { type: new GraphQLNonNull(GraphQLString) }
        },
        resolve(parent, { name, image }) {
            const category = new Category({
                name,
                image
            });
            return category.save()
        }
    },
}
