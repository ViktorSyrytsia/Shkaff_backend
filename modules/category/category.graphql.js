import {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull, GraphQLList} from 'graphql';

import {SubcategoryType} from "../types";
import {Subcategory} from '../../models'

const CategoryType = new GraphQLObjectType({
        name: 'Category',
        fields: () => ({
                id: { type: GraphQLID },
                name: { type: new GraphQLNonNull(GraphQLString) },
                image: { type: new GraphQLNonNull(GraphQLString) },
                subcategories: {
                        type: new GraphQLList(SubcategoryType),
                        resolve: (parent) => Subcategory.find({directorId: parent.id})
                }
        }),
});

export default CategoryType;
