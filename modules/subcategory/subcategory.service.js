import {Subcategory} from '../../models';

class SubcategoryService {
        getSubcategories() {
                return Subcategory.find();
        }

        getSubcategory(id) {
                return Subcategory.findById(id);
        }

        addSubcategory(data) {
                const category = new Subcategory(data);
                return category.save();
        }
}
export default new SubcategoryService();
