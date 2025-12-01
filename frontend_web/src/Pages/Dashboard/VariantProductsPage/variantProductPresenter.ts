import type { ChangeEvent } from "react";
import VariantProductModel from "../../../models/variantProduct";
import type { DeleteResponse, Product, ProductsResponse, PropsVariantProduct, VariantProduct, VariantProductRequest, VariantProductResponse, VariantsProductResponse } from "../../../types";
import ProductsModel from "../../../models/products";

const variantProductModel = new VariantProductModel();
const productsModel = new ProductsModel();
export default class VariantProductPresenter {
    #view;

    constructor({ view }: PropsVariantProduct) {
        this.#view = view;
    }
    async createVariantProduct(request: VariantProductRequest): Promise<void> {
        this.#view.setLoading(true);
        try {
            const formData = new FormData();
            Object.entries(request).forEach(([key, value]) => {
                formData.append(key, value);
            });
            const res: VariantProductResponse = await variantProductModel.createVariantProduct(formData);
            this.#view.setVariantsProduct((prev: VariantProduct[]) => [res.data, ...prev]);
        } catch (err) {
            console.error(err);
        } finally {
            this.#view.setLoading(false);
        }
    }
    async getProducts(): Promise<void> {
        this.#view.setLoading(true);
        try {
            const res: ProductsResponse = await productsModel.getProducts();
            const newRes = res.data.map((val: Product) => {
                val.checked = false;
                return { ...val };
            })
            this.#view.setProducts(newRes);
        } catch (err) {
            console.error(err);
        } finally {
            this.#view.setLoading(false);
        }
    }
    async updateVariantProduct(request: VariantProductRequest, id: string): Promise<void> {
        this.#view.setLoading(true);
        try {
            const formData = new FormData();
            Object.entries(request).forEach(([key, value]) => {
                formData.append(key, value);
            });
            const res: VariantProductResponse = await variantProductModel.updateVariantProduct(formData, id);
            console.log(res);
            this.#view.setVariantsProduct((prev: VariantProduct[]) => prev.map(val => {
                if (val.id === id) {
                    val = res.data;
                }
                return { ...prev };
            }));
        } catch (err) {
            console.error(err);
        } finally {
            this.#view.setLoading(false);
        }
    }
    async getVariantsProduct(limit: number, page: number, search?: string): Promise<void> {
        try {
            const offset = (page - 1) * limit;
            const res: VariantsProductResponse = await variantProductModel.getVariantsProduct(limit, offset, search);
            console.log(res);
            this.#view.setVariantsProduct(res.data);
        } catch (err) {
            console.error(err);
        }
    }
    async deleteVariantProduct(id: string): Promise<void> {
        if (!confirm("Apakah anda yakin ingin menghapusnya?")) return;
        try {
            const res: DeleteResponse = await variantProductModel.deleteVariantProduct(id);
            console.log(res);
        } catch (err) {
            console.error(err);
        }
    }
    async deleteVariantsProduct(ids: string[]): Promise<void> {
        if (!confirm("Apakah anda yakin ingin menghapusnya?")) return;
        try {
            const res: DeleteResponse = await variantProductModel.deleteVariantsProduct(ids);
            console.log(res);
        } catch (err) {
            console.error(err);
        }
    }
    handleCreate() {
        this.#view.setVariantProduct((prev: VariantProductRequest) => {
            prev.product_id = "";
            prev.variant_name = "";
            prev.price = 0;
            prev.stock = 0;
            return prev;
        });
        this.#view.setIsUpdate(false);
        this.#view.setShow(true);
    }
    handleClose() {
        this.#view.setShow(false);
    }
    handleUpdate(variantsProduct: VariantProduct[], ids: string[], id?: string) {
        if (!id) {
            id = ids[0];
        }
        const product = variantsProduct.find((val: VariantProduct) => val.id === id);
        if (!product) return alert("Click product dulu dong");
        this.#view.setVariantProduct((prev: VariantProductRequest) => {
            prev.product_id = product.product.id;
            prev.variant_name = product.variant_name;
            prev.price = product.price;
            prev.stock = product.stock;
            return prev;
        });
        this.#view.setVariantProductId(id);
        this.#view.setIsUpdate(false);
        this.#view.setShow(true);
    }
    handleChecked(e: ChangeEvent<HTMLInputElement>, id: string) {
        const checked = e.target.checked;
        if (checked) {
            this.#view.setVariantsProduct((prev: VariantProduct[]) => prev.map((val: VariantProduct) => {
                if (val.id === id) {
                    val.checked = true;
                }
                return { ...val };
            }))
            return this.#view.setVariantProductIds((prev: string[]) => [...prev, id]);
        }
        this.#view.setVariantProductIds((prev: string[]) => prev.filter((val: string) => val !== id));
        this.#view.setVariantsProduct((prev: VariantProduct[]) => prev.map((val: VariantProduct) => {
            if (val.id === id) {
                val.checked = false;
            }
            return { ...val };
        }))
    }
    handleChangeImage(e: ChangeEvent<HTMLInputElement>) {
        const name = e.target.name;
        const file: File | undefined = (e.target as HTMLInputElement).files?.[0];
        this.#view.setVariantProduct((prev: VariantProduct) => ({
            ...prev,
            [name]: file
        }));
        if (file) {
            const imageUrl: string = URL.createObjectURL(file);
            this.#view.setShowImage(imageUrl);
        }
    }
    handleInput(e: ChangeEvent<HTMLInputElement>) {
        const name = e.target.name;
        const value = e.target.value;
        this.#view.setVariantProduct((prev: VariantProduct) => ({
            ...prev,
            [name]: value
        }))
    }
    handleSelect(e: ChangeEvent<HTMLSelectElement>) {
        const name = e.target.name;
        const value = e.target.value;
        this.#view.setVariantProduct((prev: VariantProduct) => ({
            ...prev,
            [name]: value
        }));
    }
}