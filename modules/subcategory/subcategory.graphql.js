import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLID,
} from 'graphql';

import CategoryType from '../category/category.graphql';
import { Category } from '../../models';

const SubcategoryType = new GraphQLObjectType({
    name: 'Subcategory',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: new GraphQLNonNull(GraphQLString) },
        category: {
            type: CategoryType,
            resolve: (parent) => Category.findById(parent.categoryId)
        }
    }),
})

export default SubcategoryType;
