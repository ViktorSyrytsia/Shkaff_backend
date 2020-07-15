import { GraphQLID, GraphQLList } from 'graphql';

import SubcategoryType from './subcategory.graphql';
import {Subcategory} from '../../models';

export default {
        getSubcategory: {
                type: SubcategoryType,
                args: { id: { type: GraphQLID } },
                resolve: (parent, args) => Category.findById(args.id)
        },
        getSubcategories: {
                type: new GraphQLList(SubcategoryType),
                resolve: () => Subcategory.find({}),
        }
}
