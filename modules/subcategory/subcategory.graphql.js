import graphql from 'graphql';

import {Category} from '../../models';
import CategoryType from '../category/category.graphql';

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
} = graphql;

const SubcategoryType = new GraphQLObjectType({
    name: 'Subcategory',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: new GraphQLNonNull(GraphQLString)},
        category: {
            type: CategoryType,
            resolve: (parent) => Category.findById(parent.categoryId)
        }
    }),
})

export default SubcategoryType;
