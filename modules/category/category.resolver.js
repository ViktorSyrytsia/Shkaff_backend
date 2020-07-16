import categoryService from './category.service';

const categoryQuery = {
        getCategories: () => categoryService.getCategories(),
        getCategory: (parent, args) => categoryService.getCategory(args.id),
};

const categoryMutation = {
        addCategory: (parent, args) => {
                console.log(parent, args)
                categoryService.addCategory(args.category);
        }
};

export { categoryQuery, categoryMutation };
