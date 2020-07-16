import {GraphQLNonNull, GraphQLString, GraphQLID} from 'graphql';

import SubcategoryType from './subcategory.graphql';
import {Subcategory} from '../../models';

export default {
    setSubcategory: {
        type: SubcategoryType,
        args: {
            name: {type: new GraphQLNonNull(GraphQLString)},
            categoryId: {type: GraphQLID}
        },
        resolve(parent, {name, categoryId}) {
            const subcategory = new Subcategory({
                name,
                categoryId
            });
            return subcategory.save()
        }
    },
}
