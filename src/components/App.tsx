import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>You click {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)