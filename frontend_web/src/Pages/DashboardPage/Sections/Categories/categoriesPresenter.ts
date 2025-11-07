import CategoriesModel from "../../../../models/categories";
import type { CategoryResponse, CategoriesResponse, CategoryRequest, Category } from "../../../../types";

interface CategoriesProps {
    setCategories: Function,
    setLoading: Function,
    setCategory: Function,
    setListCategories: Function,
    setShow: Function,
    setIsUpdate: Function
}
interface Props {
    view: CategoriesProps
}

const categoriesModel = new CategoriesModel();
export default class CategoriesPresenter {

    #view;

    constructor({ view }: Props) {
        this.#view = view;
    }

    async getCategories(): Promise<void> {
        this.#view.setLoading(true);
        try {
            const res: CategoriesResponse = await categoriesModel.getCategories();
            const categories: Category[] = res.data.map((val: Category) => {
                val.checked = false;
                return {
                    ...val
                }
            });
            this.#view.setCategories(categories);
        } catch (err) {
            console.error(err);
        } finally {
            this.#view.setLoading(false);
        }
    }

    async createCategory(request: CategoryRequest): Promise<void> {
        if (request.description === "" || request.name === "") return;
        try {
            const res: CategoryResponse = await categoriesModel.createCategory(request);
            console.log(res);
            this.#view.setCategories((prev: Category[]) => [res.data, ...prev])
        } catch (err) {
            console.error(err);
        }
    }

    async updateCategory(request: CategoryRequest, id: string): Promise<void> {
        try {
            const res: CategoryResponse = await categoriesModel.updateCategory(request, id);
            console.log("update category", res.data);
            this.#view.setCategories((prev: Category[]) => {
                const newPrev: Category[] = prev.map((val: Category) => {
                    if (val.id === id) {
                        val.name = res.data.name;
                        val.description = res.data.description;
                    }
                    return {
                        ...val
                    }
                });
                return newPrev;
            });
        } catch (err) {
            console.error(err);
        }
    }

    handleInput(e : React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        const name = e.target.name;
        this.#view.setCategory((prev: CategoryRequest) => ({
            ...prev,
            [name]: value
        }));
    }

    handleAddList(e: React.ChangeEvent<HTMLInputElement>, id: string) {
        const checked: boolean = e.target.checked;
        this.#view.setCategories((prev: Category[]) => {
            const newPrev = prev.map((val: Category) => {
                if (val.id === id) {
                    val.checked = checked;
                }
                return { ...val };
            })
            return newPrev;
        })
        if (checked) {
            return this.#view.setListCategories((prev: string[]) => [...prev, id]);
        }
        this.#view.setListCategories((prev: string[]) => (prev.filter((list: string) => list !== id)));
    }

    handleShortDescription(description: string) {
        if (description.length > 60) {
            return `${description.slice(0, 60)}...`
        }
        return description;
    }

    handleClose() {
        this.#view.setShow(false);
    }


    handleCreate() {
        this.#view.setCategory({
            name: "",
            description: ""
        });
        this.#view.setIsUpdate(false);
        this.#view.setShow(true);
    }
    handleEdit(categories : Category[], id : string) {
        const findCategori = categories.find((cat) => cat.id === id);
        console.log(findCategori);
        if (findCategori) {
            this.#view.setCategory({
                name: findCategori?.name,
                description: findCategori?.description
            });
            this.#view.setIsUpdate(true);
            this.#view.setShow(true);
        }
    }
}