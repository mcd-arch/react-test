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

const Title = () => {
    return <h1>Hello App</h1>
}

const Content = () => {
    return (
        <React.Fragment>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                libero sapiente nesciunt nemo debitis consequatur culpa nisi
                dolorum enim cumque, ipsa perspiciatis quam natus tempora earum
                voluptatum? Veniam, molestiae voluptatum.
            </p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
                delectus deleniti quo, eos in rem accusantium, nemo assumenda
                consequuntur voluptatum distinctio repellat, ipsam sapiente
                blanditiis consectetur dicta quas ea cum!
            </p>
        </React.Fragment>
    )
}

function App() {
    return (
        <>
            <Title></Title>
            <Content></Content>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App></App>
    </React.StrictMode>
)
