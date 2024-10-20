import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MinimizeReRender } from './MinimizeReRender.jsx'
import { WrapperComponent } from './WrapperComponent.jsx'
import { UseEffectHook } from './hooks/UseEffectHook.jsx'
import { UseMemoHook } from './hooks/UseMemoHook.jsx'
import { UseCallback } from './hooks/UseCallback.jsx'
import { UseRef } from './hooks/UseRef.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard } from './components/Dashboard.jsx'
import { LandingPage } from './components/LandingPage.jsx'
import { UseNavigate } from './hooks/UseNavigate.jsx'


createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/* <MinimizeReRender /> */}
        {/* <WrapperComponent /> */}
        {/* <UseEffectHook /> */}
        {/* <UseMemoHook /> */}
        {/* <UseCallback /> */}
        {/* <UseRef /> */}

        {/* Route using window.location.href */}
        {/* <div>
            <button onClick={() => {
                console.log(window.location);
                window.location.href = "/landing"
            }}>Go to Landing Page</button>
            <button onClick={() => {
                window.location.href = "/dashboard"
            }}>Go to Dashboard Page</button>
        </div> */}
        <BrowserRouter>
            <UseNavigate />
            <Routes>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/landing' element={<LandingPage />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
