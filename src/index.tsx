import React from 'react'
import ReactDOM from 'react-dom/client'

const h1 = <h1 id="title">Hello React.js</h1>

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
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{content}</React.StrictMode>)
