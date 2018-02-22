import React, {Component} from "react";
import './Spinner.css';

export const componentIds = [0, 1, 3, 2];

export class Spinner extends Component {
    constructor() {
        super();
        this.state = {
            queue: []
        };
        this.el = new Array(4).fill(0);
    }

    getSpinnerItem(el, ind) {
        const classes = ['Spinner-Item'];
        if (this.state.queue.includes(ind)) {
            classes.push('Spinner-Item-Hidden');
        }
        return <div className={classes.join(' ')} key={ind}> </div>
    }

    worker() {
        const {queue} = this.state;
        if (queue.length < componentIds.length
            && queue[queue.length - 1] !== componentIds[componentIds.length - 1]) {
            queue.push(componentIds[queue.length]);
        } else {
            queue.splice(0, 1);
        }
        this.setState({queue: queue})
    }

    componentDidMount() {
        this.i = setInterval(() => this.worker(), 200);
    }

    componentWillUnmount() {
        clearInterval(this.i);
        this.i = null;
    }

    render() {
        const {size} = this.props;
        return (
            <div className={`Spinner Spinner-size_${size}`}>
                {this.el.map(this.getSpinnerItem.bind(this))}
            </div>
        );
    }
}

Spinner.defaultProps = {
    size: 'small'
};
