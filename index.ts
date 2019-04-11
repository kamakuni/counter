import * as React from 'react'
import * as ReactDOM from 'react-dom'

const App = () => {
    const [count, setCount] = React.useState(0)
    return (
        <div>
            <p>You click {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"))