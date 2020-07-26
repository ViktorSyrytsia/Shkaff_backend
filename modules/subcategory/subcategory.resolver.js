import subcategoryService from './subcategory.service';

const subcategoryQuery = {
    getSubcategories: () => subcategoryService.getSubcategories(),
    getSubcategory: (parent, args) => subcategoryService.getSubcategory(args.id),
};

const subcategoryMutation = {
    addSubcategory: (parent, args) => subcategoryService.addSubcategory(args.subcategory),
    updateSubcategory: (parent, args) => subcategoryService.updateSubcategory(args),
    deleteSubcategory: (parent, args) => subcategoryService.deleteSubcategory(args.id),
};

export {subcategoryQuery, subcategoryMutation};
