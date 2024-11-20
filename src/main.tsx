import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {EnglishPresentSimple} from "./components/english/PresentSimple/EnglishPresentSimple.tsx";
import {EnglishToBe} from "./components/english/ToBe/EnglishToBe.tsx";
import {Phrases} from "./components/english/Phrases/Phrases.tsx";
import {DailyPhrases} from "./components/english/Common/Daily.tsx";
import {TableOfVerbs} from "./components/english/TableOfVerbs/TableOfVerbs.tsx";

const router = createBrowserRouter([{
    path: "/", element: <App/>
}, {
    path: '/english/ps', element: <EnglishPresentSimple/>
}, {
    path: '/english/tobe', element: <EnglishToBe/>
}, {
    path: '/english/pv', element: <Phrases/>
}, {
    path: '/english/dp', element: <DailyPhrases/>
}, {
    path: '/english/table', element: <TableOfVerbs/>
}])

createRoot(document.getElementById('root')!).render(<StrictMode>
    <RouterProvider router={router}/>
</StrictMode>,)
