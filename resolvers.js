import { categoryQuery, categoryMutation } from './modules/category/category.resolver';

const resolvers = {
        Query: {
                ...categoryQuery
        },
        Mutation: {
                ...categoryMutation
        }
};

export default resolvers;
