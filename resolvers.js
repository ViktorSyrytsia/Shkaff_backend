import { categoryQuery, categoryMutation } from './modules/newCategory/category.resolver';

const resolvers = {
        Query: {
                ...categoryQuery
        },
        Mutation: {
                ...categoryMutation
        }
};

export default resolvers;