// useNavigate hook is used to navigate to a different route without reloading the page
// This should always be in a component that is inside BrowserRouter
// Its initializatio should also be inside a component that is under BrowserRouter


import { useNavigate } from "react-router-dom";

export function UseNavigate() {

    const navigate = useNavigate();

    return <div>
        <button onClick={() => {
            navigate('/landing');
        }}>Landing Page</button>
        <button onClick={() => {
            navigate('/dashboard');
        }}>Dashboard Page</button>
    </div>
}