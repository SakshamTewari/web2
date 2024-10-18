import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MinimizeReRender } from './MinimizeReRender.jsx'
import { WrapperComponent } from './WrapperComponent.jsx'
import { UseEffectHook } from './hooks/UseEffectHook.jsx'
import { UseMemoHook } from './hooks/UseMemoHook.jsx'
import { UseCallback } from './hooks/UseCallback.jsx'
import { UseRef } from './hooks/UseRef.jsx'


createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/* <MinimizeReRender /> */}
        {/* <WrapperComponent /> */}
        {/* <UseEffectHook /> */}
        {/* <UseMemoHook /> */}
        {/* <UseCallback /> */}
        <UseRef />
    </StrictMode>,
)
