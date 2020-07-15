import { categoryQuery, categoryMutation } from './modules/category/category.resolver';
import { subcategoryQuery, subcategoryMutation } from './modules/subcategory/subcategory.resolver';

const resolvers = {
        Query: {
                ...categoryQuery,
                ...subcategoryQuery
        },
        Mutation: {
                ...categoryMutation,
                ...subcategoryMutation,
        }
};

export default resolvers;
