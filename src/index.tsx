import React from 'react'
import ReactDOM from 'react-dom/client'
import Content from './Content'

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

const Title = (props: ITitleProps) => {
    console.log(props)
    return <h1>Hello {props.text}</h1>
}

function App() {
    return (
        <>
            <Title text="React"></Title>
            <Title text="TS"></Title>
            <Content
                text1={'howdey'}
                text2={'Hello world'}
                year={2023}
            ></Content>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App></App>
    </React.StrictMode>
)
