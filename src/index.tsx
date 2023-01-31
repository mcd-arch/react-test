import React from 'react'
import ReactDOM from 'react-dom/client'

/*const h1 = <h1 id="title">Hello React.js</h1>

let a = 10
let b = `jfgjdlgdjlfgl`

const list = (
    <ul>
        <li>list item {a}</li>
        <li>list item {b}</li>
        <li>list item 3</li>
    </ul>
)

const content = (
    <div>
        {h1}
        {list}
    </div>
)*/

interface ITitleProps {
    text: string
}

type ContentProps = {
    text1: string
    text2: string
    year: number
}

const Title = (props: ITitleProps) => {
    console.log(props)
    return <h1>Hello {props.text}</h1>
}

const Content = (props: ContentProps) => {
    return (
        <React.Fragment>
            <p>{props.text1}</p>
            <p>{props.text2}</p>
            <div>Year: {props.year}</div>
        </React.Fragment>
    )
}

function App() {
    return (
        <>
            <Title text="React"></Title>
            <Title text="TS"></Title>
            <Content text1="howdey" text2="Hello world" year={2023}></Content>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App></App>
    </React.StrictMode>
)
