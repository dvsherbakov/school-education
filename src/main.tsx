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
    path: "/school-education", element: <App/>
}, {
    path: '/school-education/english/ps', element: <EnglishPresentSimple/>
}, {
    path: '/school-education/english/tobe', element: <EnglishToBe/>
}, {
    path: '/school-education/english/pv', element: <Phrases/>
}, {
    path: '/school-education/english/dp', element: <DailyPhrases/>
}, {
    path: '/school-education/english/table', element: <TableOfVerbs/>
}])

createRoot(document.getElementById('root')!).render(<StrictMode>
    <RouterProvider router={router}/>
</StrictMode>,)
