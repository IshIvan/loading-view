import React, {Component} from 'react';
import './Loading.css';
import {Spinner} from "../spinner/Spinner";

export class Loading extends Component {
    render() {
        return (
            <div className="LoadingView">
                <Spinner size={this.props.spinnerSize}/>
                <div className="Text-Light">{this.props.children}</div>
            </div>
        );
    }
}

Loading.defaultProps = {
    spinnerSize: 'small',
    children: 'Не переживайте, скоро все пройдет!'
};