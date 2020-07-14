import graphql from 'graphql';

import CategoryType from './category.graphql';
import {Category} from '../../models';

const {GraphQLID, GraphQLList} = graphql;

export default {
    getCategory: {
        type: CategoryType,
        args: {id: {type: GraphQLID}},
        resolve: (parent, args) => Category.findById(args.id)
    },
    getCategories: {
        type: new GraphQLList(CategoryType),
        resolve: () => Category.find({}),
    },
}
