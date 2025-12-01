import ProductsModel from "../../../models/products";

interface Props {
    view: {
        setProducts: Function
    }
}
const modelProducts = new ProductsModel();
export default class HomePresenter {
    #view;

    constructor({ view } : Props) {
        this.#view = view;
    }
    async getProducts(): Promise<void> {
        try {
            const res = await modelProducts.getProducts();
            console.log(res);
            this.#view.setProducts(res.data);
        } catch (err) {
            console.error(err);
        }
    }
}