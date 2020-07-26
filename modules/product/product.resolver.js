import productService from './product.service';

const productQuery = {
    getProducts: () => productService.getProducts(),
    getProduct: (parent, args) => productService.getProduct(args.id),
};

const productMutation = {
    addProduct: (parent, args) => productService.addProduct(args.product),
    updateProduct: (parent, args) => productService.updateProduct(args),
    deleteProduct: (parent, args) => productService.deleteProduct(args.id),
    updateProductRating: (parent, args) => {
        console.log(args)
        return productService.updateProductRating(args)
    },
};

export {productQuery, productMutation};
