// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {

    state = {
        secondsLeft: this.props.initialCount
    }

    bomberTimer = (timer) => timer === 0 ? 'Boom!': `${this.state.secondsLeft} seconds left before I go boom!`;

    render() {
        return this.bomberTimer(this.state.secondsLeft)
        // return `${this.state.secondsLeft} seconds left before I go boom!`
    }
}