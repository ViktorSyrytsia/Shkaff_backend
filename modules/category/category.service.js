import Category from '../../models/category';

class CategoryService {
        getCategories() {
                return Category.find();
        }

        getCategory(id) {
                return Category.findById(id);
        }

        addCategory(data) {
                const category = new Category(data);
                return category.save();
        }
}
export default new CategoryService();
