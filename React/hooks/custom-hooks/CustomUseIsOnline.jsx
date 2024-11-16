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
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []);

    return isOnline;
}