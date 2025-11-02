import { useState } from "react"
import type { LoginRequest } from "../../types";
import LoginPresenter from "./loginPresenter";
import { useNavigate } from "react-router-dom";


export default function LoginPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<LoginRequest>({
        username: "",
        password: ""
    });
    const [loading, setLoading] = useState<boolean>(false);

    const presenter : LoginPresenter = new LoginPresenter({
        view: {
            setLoading: setLoading,
            navigate: navigate
        }
    });
    function updateFormData(name: string, value: string) {
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    }
    function prosesLogin(e: React.FormEvent) {
        e.preventDefault();
        presenter.hanldeLogin(formData);
    }
    return (
        <>
            <div className="flex items-center justify-center pt-20">
                {loading}
                <form onSubmit={prosesLogin} className="w-100 flex flex-col gap-3">
                    <h2 className="text-lg text-center p-2">Login</h2>
                    <div className="py-2">
                        <label htmlFor="">Masukan Username</label>
                        <input type="text" className="w-full p-2 border-1 rounded-sm" name="username" onChange={(e) => updateFormData(e.target.name, e.target.value)} id="" />
                    </div>
                    <div className="py-2">
                        <label htmlFor="">Masukan Password</label>
                        <input type="password" className="w-full p-2 border-1 rounded-sm" name="password" onChange={(e) => updateFormData(e.target.name, e.target.value)} id="" />
                    </div>
                    <button type="submit" className="p-2 mt-5 rounded-full bg-blue-500 text-white">Login</button>
                </form>
            </div>
        </>
    )
}