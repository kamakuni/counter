import * as React from 'react'

interface IState {
    count: number
}

class Counter extends React.Component<{}, IState> {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    // https://qiita.com/shuntksh/items/fd81ca9aa31ea8f962e2
    increase() { 
        const count = this.state.count + 1
        this.setState({ count })
    }
    render() {
        return (
            <div>
                <div>{this.state.count}</div>
                <button onClick={this.increase.bind(this)} >Click me</button>
            </div>
        );
    }
}

export default Counter