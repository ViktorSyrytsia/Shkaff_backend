import { GraphQLNonNull, GraphQLString } from 'graphql';

<<<<<<< HEAD
const CategoryType = require('./category.graphql');
const { Category } = require('../../models');

const { GraphQLNonNull, GraphQLString } = graphql;

module.exports = {
=======
import CategoryType from './category.graphql';
import {Category} from '../../models';

export default {
>>>>>>> 23019bb8b76a16f9d4bac9da8fc5447f57214d33
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
