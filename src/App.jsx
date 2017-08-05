import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'December 25, 2017', //variáveis
            numberOfDays: 1000
        }
    }

    changeDeadline() {
        this.setState({ deadline: 'November 25, 2017' })
    }

    increaseNumberDays(number) {
        this.setState({ numberOfDays: number })
    }


    render() {
        return(
            <div className="App">
                <div className="Title">Countdown to {this.state.deadline}</div>
                <div>
                    <div className="Clock-days">{this.state.numberOfDays} days</div>
                    <div className="Clock-hours">30 hours</div>
                    <div className="Clock-minutes">15 minutes</div>
                    <div className="Clock-seconds">20 seconds</div>
                </div>
                
                <div>
                    <input placeholder='new date'/>
                    {/* função anonima "()" é necessária para evitar bugs */}
                    <button onClick={ () => this.changeDeadline() }>
                        Click here!
                    </button>

                    <button onClick={ () => this.increaseNumberDays(1001) }>
                        Increase Days!
                    </button>

                </div>

            </div>
        )
    }
}

export default App;