import { Navigate } from "react-router-dom";
import { isToken, updateAccessToken } from "./models";
import { useEffect, useState } from "react";

interface Props {
    children: React.ReactNode
}
export default function Authorization({ children }: Props) {
    const [login, setLogin] = useState<boolean>(isToken());
    const [loading, setLoading] = useState<boolean>(true);
    async function isLogging() {
        try {
            if (!login) {
                await updateAccessToken();
                setLogin(isToken());
            }
        } catch (err) {
            console.error(err);
            setLogin(false);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        isLogging();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center w-full h-80">
                <div className="w-10 h-10 rounded-full border-4 border-t-transparent border-orange-600 animate-circle"></div>
            </div>
        );
    }
    return login ? children : <Navigate to={"/login"} replace />
}