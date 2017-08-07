import React, { Component } from 'react';
import Clock from './Clock'
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'December 25, 2017', //variáveis
            newDeadline: ''
        }
    }

    changeDeadline() {
        //this.setState({ deadline: 'November 25, 2017' })
        this.setState({ deadline: this.state.newDeadline })
    }

    increaseNumberDays(number) {
        this.setState({ numberOfDays: number })
    }


    render() {
        return(
            <div className="App">
                <div className="Title">Countdown to {this.state.deadline}</div>
                <Clock
                    deadline={this.state.deadline}
                />
                <div>
                    {/* Preenchendo newDeadline pelo campo*/}
                    <input 
                        placeholder='new date'
                        onChange={event => this.setState({ newDeadline: event.target.value })}
                    />
                    {/* função anonima "()" é necessária para evitar bugs */}
                    <button onClick={ () => this.changeDeadline() }>
                        Click here!
                    </button>

                </div>

            </div>
        )
    }
}

export default App;