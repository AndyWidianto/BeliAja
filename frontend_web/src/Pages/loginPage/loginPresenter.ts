import { updateToken } from "../../models";
import AuthModel from "../../models/auth";
import type { LoginRequest, AuthResponse } from "../../types";

interface LoginProps {
    setLoading: Function,
    navigate: Function
}
interface Props {
    view: LoginProps
}

const authModel : AuthModel = new AuthModel();
export default class LoginPresenter {
    
    #view : LoginProps;
    constructor({ view } : Props) {
        this.#view = view;
    }

    async hanldeLogin(request : LoginRequest) : Promise<void> {
        this.#view.setLoading(true);
        try {
            const res : AuthResponse = await authModel.Login(request);
            if (res.token) {
                updateToken(res.token);
            }
            console.log(res);
            return this.#view.navigate("/dashboard", { replace: true });
        } catch (err) {
            console.error(err);
        } finally {
            this.#view.setLoading(false);
        }
    }
}