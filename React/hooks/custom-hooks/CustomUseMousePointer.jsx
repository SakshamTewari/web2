import { useEffect, useState } from "react";

export function CustomUseMousePointer() {
    const pointer = useMousePointer();
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#2e2e2e',
        }}>
            <div style={{
                backgroundColor: 'black',
                color: 'white',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            }}>
                Your Mouse pointer is at x:{pointer.x} y:{pointer.y}
            </div>
        </div>


    )
}

const useMousePointer = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    }

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);

        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return position;
}