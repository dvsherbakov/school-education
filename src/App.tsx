import './App.css'
import {useState} from "react";
import {EnglishPresentSimple, IrregularVerbs, TimesTest} from "./components/english";
import {EnglishToBe} from "./components/english";
import {DailyPhrases} from "./components/english";
import {Phrases} from "./components/english";
import {TableOfVerbs} from "./components/english";

const params = new Map([
    [0, <EnglishPresentSimple/>],
    [1, <EnglishToBe/>],
    [2, <Phrases/>],
    [3, <DailyPhrases/>],
    [4, <TableOfVerbs/>],
    [5, <TimesTest/>],
    [6, <IrregularVerbs/>],
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
                    <li><span onClick={() => setSelected(5)}>Test</span></li>
                    <li><span onClick={() => setSelected(6)}>Irregular verbs</span></li>
                </ul>

            </div>
            <div>{params.get(selected)}</div>
        </>
    );
}

export default App;
