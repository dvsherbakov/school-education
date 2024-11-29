import styles from './times.module.scss'
import {useState} from "react";

const phrases = [{phrase: 'Она живет в большом городе', variants: ["she", "he", "live", "lived", "in", "where", "big", "was", "city"]},]

export const TimesTest = () => {
    const [marker, setMarker] = useState<number>(0)
    const [word, setWord] = useState<string | undefined>(undefined)
    const [list, setList] = useState<string[]>([])
    const next = () => {
        if (marker < phrases.length) {
            setMarker((current) => ++current)
        }
    }
    return (<div className={styles.wrapper}>
        <h2>Probe</h2>
        <div>
            <div>-</div>
            <div className={styles.phrase}>{phrases[marker].phrase}</div>
            <div onClick={next}>+</div>
        </div>
        <div className={styles.dest} onDrop={() => {
            setList([...list, word || 'undo'])

        }} onDragOver={(x) => {
            x.preventDefault()
        }}>{list.map(((s, idx) => <div key={idx.toString()}>{s}</div>))}</div>
        <div className={styles.src}>{phrases[marker].variants.map((p, idx) => <div key={idx.toString()} onDragStart={() => {
            setWord(p)
        }} draggable={"true"}>{p}</div>)}</div>
    </div>)
}