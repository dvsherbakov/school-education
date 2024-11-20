import './App.css'
import {useState} from "react";
import {EnglishPresentSimple} from "./components/english/PresentSimple/EnglishPresentSimple.tsx";
import {EnglishToBe} from "./components/english/ToBe/EnglishToBe.tsx";
import {DailyPhrases} from "./components/english/Common/Daily.tsx";
import {Phrases} from "./components/english/Phrases/Phrases.tsx";
import {TableOfVerbs} from "./components/english/TableOfVerbs/TableOfVerbs.tsx";

const params = new Map([
    [0, <EnglishPresentSimple/>],
    [1, <EnglishToBe/>],
    [2, <Phrases/>],
    [3, <DailyPhrases/>],
    [4, <TableOfVerbs/>],
])

function App() {
    const [selected, setSelected] = useState<number>(0)
    return (
        <>
            <div className={'nav'}>
                <ul>
                    <li><span onClick={() => setSelected(0)}>Present simple</span></li>
                    <li><span onClick={() => setSelected(1)}>To be</span></li>
                    <li><span onClick={() => setSelected(2)}>Phrases verb</span></li>
                    <li><span onClick={() => setSelected(3)}>Common phrases</span></li>
                    <li><span onClick={() => setSelected(4)}>Table of verbs</span></li>
                </ul>

            </div>
            <div>{params.get(selected)}</div>
        </>
    );
}

export default App;
