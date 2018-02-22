import React, {Component} from 'react';
import './App.css';
import '../common/styles.css';
import {Spinner} from "../common/spinner/Spinner";
import {Loading} from "../common/loading/Loading";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Обработка всплывающего спинера</h1>
                </header>
                <div className="App-intro">
                    <Spinner/>
                    <button>Кликни на меня</button>
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
