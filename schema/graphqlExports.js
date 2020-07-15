const CategoryQueries = require('../modules/category/category.queries');
const CategoryMutations = require('../modules/category/category.mutations');
const SubcategoryQueries = require('../modules/subcategory/subcategory.queries');
const SubcategoryMutations = require('../modules/subcategory/subcategory.mutations');

exports.module = { CategoryQueries, CategoryMutations, SubcategoryQueries, SubcategoryMutations };