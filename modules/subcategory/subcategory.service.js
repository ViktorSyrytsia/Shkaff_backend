import {Subcategory} from '../../models';

class SubcategoryService {
    getSubcategories() {
        return Subcategory.find();
    }

    getSubcategory(id) {
        return Subcategory.findById(id);
    }

    getSubcategoriesByParentId(id) {
        return Subcategory.find({categoryId: id})
    }

    addSubcategory(data) {
        const subcategory = new Subcategory(data);
        return subcategory.save();
    }

    updateSubcategory({id, subcategory: {name, categoryId}}) {
        return Subcategory.findByIdAndUpdate(
            id,
            {$set: {name, categoryId}},
            {new: true}
        );
    }

    deleteSubcategory(id) {
        return Promise.all([
            //Product.deleteMany({categoryId: id}),
            Subcategory.findByIdAndRemove(id)
        ])
    }
}

export default new SubcategoryService();
