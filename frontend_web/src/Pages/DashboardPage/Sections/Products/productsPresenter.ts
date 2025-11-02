import ProductsModel from "../../../../models/products";
import type { Product, ProductRequest, ProductResponse, ProductsResponse } from "../../../../types";

interface Props {
    view: ViewProps
}
interface ViewProps {
    setProducts: Function,
    setLoading: Function,
    setShow: Function,
    setProduct: Function,
    setIsUpdate: Function
}

const productsModel = new ProductsModel();
export default class ProductPresenter {

    #view;
    constructor({ view } : Props) {
        this.#view = view;
    }


    async getProducts(): Promise<void> {
        this.#view.setLoading(true);
        try {
            const res: ProductsResponse = await productsModel.getProducts();
            this.#view.setProducts(res.data);
        } catch (err) {
            console.error(err);
        } finally {
            this.#view.setLoading(false);
        }
    }

    async updateProduct(request : ProductRequest, id : string) {
        this.#view.setLoading(true);
        try {
            const res : ProductResponse = await productsModel.updateProduct(request, id);
            this.#view.setProducts((prev : Product[]) => (
                prev.map((val : Product) => {
                    if (val.id === id) {
                        val.name = res.data.name;
                        val.description = res.data.description;
                    }
                    return {
                        ...val
                    }
                })
            ))
        } catch (err) {
            console.error(err);
        } finally {
            this.#view.setLoading(false);
        }
    }

    handleInput(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        const name = e.target.name;
        this.#view.setProduct((prev: ProductRequest) => ({
            ...prev,
            [name]: value
        }));
    }

    handleCreate() {
        this.#view.setProduct({
            name: "",
            description: "",
            category_id: ""
        });
        this.#view.setIsUpdate(false);
        this.#view.setShow(true);
    }
    handleClose() {
        this.#view.setShow(false);
    }
}