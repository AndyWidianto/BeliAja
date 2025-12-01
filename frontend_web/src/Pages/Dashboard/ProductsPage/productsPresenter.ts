import type { ChangeEvent } from "react";
import ProductsModel from "../../../models/products";
import type { CategoriesResponse, DeleteResponse, Product, ProductRequest, ProductResponse, ProductsResponse, PropsProductPresenter } from "../../../types";
import CategoriesModel from "../../../models/categories";

const productsModel = new ProductsModel();
const categoriesModel: CategoriesModel = new CategoriesModel();

export default class ProductPresenter {

    #view;
    constructor({ view }: PropsProductPresenter) {
        this.#view = view;
    }


    async getProducts(): Promise<void> {
        this.#view.setLoading(true);
        try {
            const res: ProductsResponse = await productsModel.getProducts();
            console.log(res);
            const newRes = res.data.map((val: Product) => {
                val.checked = false;
                return { ...val };
            });
            this.#view.setProducts(newRes);
        } catch (err) {
            console.error(err);
        } finally {
            this.#view.setLoading(false);
        }
    }

    async updateProduct(request: ProductRequest, id: string) {
        this.#view.setLoading(true);
        try {
            const formData = new FormData();
            Object.entries(request).forEach(([key, val]) => {
                formData.append(key, val);
            });
            const res: ProductResponse = await productsModel.updateProduct(formData, id);
            this.#view.setProducts((prev: Product[]) => (
                prev.map((val: Product) => {
                    if (val.id === id) {
                        val.name = res.data.name;
                        val.description = res.data.description;
                    }
                    return {
                        ...val
                    }
                })
            ));
        } catch (err) {
            console.error(err);
        } finally {
            this.#view.setLoading(false);
        }
    }

    async createProduct(request: ProductRequest): Promise<void> {
        this.#view.setLoading(true);
        try {
            const formData = new FormData();
            Object.entries(request).forEach(([key, val]) => {
                formData.append(key, val);
            })
            const res: ProductResponse = await productsModel.createProduct(formData);
            console.log(res);
            this.#view.setProducts((prev: Product[]) => [res.data, ...prev]);
        } catch (err) {
            console.error(err);
        } finally {
            this.#view.setLoading(false);
        }
    }
    async deleteProducts(ids: string[]) {
        try {
            const res: DeleteResponse = await productsModel.deleteProducts(ids);
            console.log(res);
            alert(res.message);
        } catch (err) {
            console.error(err);
        }
    }
    async deleteProduct(id: string) {
        try {
            const res: DeleteResponse = await productsModel.deleteProduct(id);
            console.log(res);
            alert(res.message);
        } catch (err) {
            console.error(err);
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
    handleSelect(e: ChangeEvent<HTMLSelectElement>) {
        const value = e.target.value;
        const name = e.target.name;
        this.#view.setProduct((prev: ProductRequest) => ({
            ...prev,
            [name]: value
        }))
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
    handleUpdate(products: Product[], ids: string[], id?: string) {
        if (!id) {
            id = ids[0];
        }
        const product = products.find((val: Product) => val.id === id);
        if (!product) return alert("Click product dulu dong");
        this.#view.setProduct((prev: ProductRequest) => {
            prev.name = product.name;
            prev.description = product.description;
            prev.category_id = product.category.id;
            return prev;
        });
        this.#view.setProductId(id);
        this.#view.setIsUpdate(false);
        this.#view.setShow(true);
    }
    handleChecked(e: ChangeEvent<HTMLInputElement>, id: string) {
        const checked = e.target.checked;
        if (checked) {
            this.#view.setProducts((prev: Product[]) => prev.map((val: Product) => {
                if (val.id === id) {
                    val.checked = true;
                }
                return { ...val };
            }))
            return this.#view.setProductIds((prev: string[]) => [...prev, id]);
        }
        this.#view.setProductIds((prev: string[]) => prev.filter((val: string) => val !== id));
        this.#view.setProducts((prev: Product[]) => prev.map((val: Product) => {
            if (val.id === id) {
                val.checked = false;
            }
            return { ...val };
        }))
    }
    async getCategories(): Promise<void> {
        try {
            const res: CategoriesResponse = await categoriesModel.getCategories();
            this.#view.setCategories(res.data);
        } catch (err) {
            console.error(err);
        }
    }
    handleChangeImage(e: ChangeEvent<HTMLInputElement>) {
        const image: File | undefined = (e.target as HTMLInputElement).files?.[0];
        if (image) {
            this.#view.setProduct((prev: Product) => ({
                ...prev,
                image: image
            }));
            const urlImage = URL.createObjectURL(image);
            this.#view.setImage(urlImage);
        }
    } 
}