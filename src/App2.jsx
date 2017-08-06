import React, { Component } from 'react';

class App2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            randomAge: 17,
            randomname: 'Thiago'
        }
    }

    render() {
        return (
            <div className="divPrincipal">
                <p>Something inside tags</p>
            </div>
        );
    }
}

export default App2;