import {categoryQuery, categoryMutation} from './modules/category/category.resolver';
import {subcategoryQuery, subcategoryMutation} from './modules/subcategory/subcategory.resolver';
import CategoryService from "./modules/category/category.service";
import SubcategoryService from "./modules/subcategory/subcategory.service";

const resolvers = {
    Query: {
        ...categoryQuery,
        ...subcategoryQuery,
    },
    Mutation: {
        ...categoryMutation,
        ...subcategoryMutation,
    },
    Category: {
        subcategories: (parent) => SubcategoryService.getSubcategoriesByParentId(parent.id)
    },
    Subcategory: {
        category: (parent) => CategoryService.getCategory(parent.categoryId)
    }
};

export default resolvers;
