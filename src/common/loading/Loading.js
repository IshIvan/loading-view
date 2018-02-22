import React, {Component} from 'react';
import './Loading.css';
import {Spinner} from "../spinner/Spinner";

export class Loading extends Component {
    render() {
        return (
            <div className="LoadingView">
                <Spinner size={this.props.spinnerSize}/>
                <div className="Text-Light">Не переживайте, скоро все пройдет!</div>
            </div>
        );
    }
}

Loading.defaultProps = {
    spinnerSize: 'small'
};