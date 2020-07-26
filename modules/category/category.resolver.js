import categoryService from './category.service';

const categoryQuery = {
        getCategories: () => categoryService.getCategories(),
        getCategory: (parent, args) => categoryService.getCategory(args.id),
};

const categoryMutation = {
        addCategory: (parent, args) => categoryService.addCategory(args.category),
        updateCategory: (parent, args) => categoryService.updateCategory(args),
        deleteCategory: (parent, args) => categoryService.deleteCategory(args.id),
};

export { categoryQuery, categoryMutation };
