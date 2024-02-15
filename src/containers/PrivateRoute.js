import React, { useEffect } from "react";
import checkAuth from "@/utils/checkAuth";
import { useRouter } from "next/router";

const privateRoute = (WrappedComponent) => {

    const AuthComponent = (props) => {
        
        const router = useRouter();
        const isAuthenticated = checkAuth();

        useEffect(() => {
            if (typeof window !== "undefined" & !isAuthenticated) {
                router.push("/register");
            }
        }, [isAuthenticated, router]);

        return <WrappedComponent {...props} />;
    };

    return AuthComponent;
}

export default privateRoute;