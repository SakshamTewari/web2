import { useEffect, useState } from "react";

export function CustomUseIsOnline() {

    const isOnline = useIsOnline();
    return (
        <>
            {isOnline ? "Yay! You are online!" : "You are offline"}
        </>
    )
}


// Custom hook that returns true or false based on whether the person is online or not
function useIsOnline() {
    const [isOnline, setIsOnline] = useState(window.navigator.onLine);

    useEffect(() => {
        window.addEventListener("online", () => {
            setIsOnline(true);
        });

        window.addEventListener("offline", () => {
            setIsOnline(false);
        });
    }, []);

    return isOnline;
}