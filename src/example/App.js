import React, {Component} from 'react';
import './App.css';
import '../common/styles.css';
import {Spinner} from "../common/spinner/Spinner";
import {Loading} from "../common/loading/Loading";

class App extends Component {
    constructor() {
        super();
        this.state = {
            isMask: false
        };
    }

    /**
     * Создаем маску.
     */
    mask() {
        this.setState({isMask: true});
    }

    /**
     * Убираем маскую
     */
    ummask() {
        this.setState({isMask: false});
    }

    /**
     * Если состояние содержит флаг показа маски,
     * то возвращаем элемент маски и ставим время уничтожения 2 секунды.
     */
    get loadingNode() {
        if (this.state.isMask) {
            setTimeout(() => this.ummask(), 2000);
            return <Loading spinnerSize="large">Это закончится через 2 секунды</Loading>;
        }

        return null;
    }

    render() {
        return (
            <div className="App">
                {this.loadingNode}
                <header className="App-header">
                    <h1 className="App-title">Обработка всплывающего спинера</h1>
                </header>
                <div className="App-intro">
                    <Spinner/>
                    <button onClick={this.mask.bind(this)}>Кликни на меня</button>
                </div>
                <div className="Test">
                    <div>Я модальное окно</div>
                    <div>Я модальное окно</div>
                    <div>Я модальное окно</div>
                    <div>Я модальное окно</div>
                    <Loading spinnerSize="medium"/>
                </div>
            </div>
        );
    }
}

export default App;
