import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
} from 'graphql';

import CategoryType from '../category/category.graphql';
import { Category } from '../../models';

const SubcategoryType = new GraphQLObjectType({
    name: 'Subcategory',
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        category: {
            type: CategoryType,
            resolve: (parent) => Category.findById(parent.categoryId)
        }
    }),
})

export default SubcategoryType;
