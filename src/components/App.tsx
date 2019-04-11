import * as React from 'react'

const App = () => {
    const [count, setCount] = React.useState(0)
    return (
        <div>
            <p>You click {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}

export default App