import { GraphQLID, GraphQLList } from 'graphql';

import {SubcategoryType} from '../types';
import {Subcategory} from '../../models';

export default {
        getSubcategory: {
                type: SubcategoryType,
                args: { id: { type: GraphQLID } },
                resolve: (parent, args) => Subcategory.findById(args.id)
        },
        getSubcategories: {
                type: new GraphQLList(SubcategoryType),
                resolve: () => Subcategory.find({}),
        }
}
