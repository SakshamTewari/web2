import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { MinimizeReRender } from './MinimizeReRender.jsx'
import { WrapperComponent } from './WrapperComponent.jsx'
import { UseEffectHook } from './hooks/UseEffectHook.jsx'
import { UseMemoHook } from './hooks/UseMemoHook.jsx'
import { UseCallback } from './hooks/UseCallback.jsx'
import { UseRef } from './hooks/UseRef.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { Dashboard } from './components/Dashboard.jsx'   using default export to support lazy loading
import { LandingPage } from './components/LandingPage.jsx'
import { UseNavigate } from './hooks/UseNavigate.jsx'

const Dashboard = lazy(() => import('./components/Dashboard.jsx'));


createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/* <MinimizeReRender /> */}
        {/* <WrapperComponent /> */}
        {/* <UseEffectHook /> */}
        {/* <UseMemoHook /> */}
        {/* <UseCallback /> */}
        {/* <UseRef /> */}

        {/* Route using window.location.href */}
        {/* 
        <div>
            <button onClick={() => {
                console.log(window.location);
                window.location.href = "/landing"
            }}>Go to Landing Page</button>
            <button onClick={() => {
                window.location.href = "/dashboard"
            }}>Go to Dashboard Page</button>
        </div> 
        */}



        {/* 
        Suspense API , that react provides, is used to fetch asynchronous components
        Asynchronous components are nothing but the Lazy Loaded components, whose .jsx file is sent only when used
        As it takes few seconds to get the .jsx file (check it in the Network), we use Suspense wrapper
        */}
        <BrowserRouter>
            <UseNavigate />
            <Routes>
                <Route path='/dashboard' element={<Suspense fallback={"loading..."}><Dashboard /></Suspense>} />
                <Route path='/landing' element={<Suspense fallback={"loading..."}><LandingPage /></Suspense>} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
