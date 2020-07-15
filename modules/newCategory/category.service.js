import Category from '../../models/category';

class CategoryService {
        getAllCategories() {
                return Category.find();
        }

        getCategoryById(id) {
                return Category.findById(id);
        }

        updateCategory(id, category) {
                return Category.findByIdAndUpdate(id, category);
        }

        addCategory(data) {
                const category = new Category(data);
                return category.save();
        }

        deleteCategory(id) {
                return Category.findByIdAndDelete(id);
        }
}
export default new CategoryService();