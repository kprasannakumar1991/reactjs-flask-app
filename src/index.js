import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Resource from './components/Resource';

const App = () => {
    return (
        <div className="ui container">
            <Header title="System Resource Utilization" subTitle="from SmartCow" />
            <Resource refreshInterval={1000} samples={50}/>
        </div>
    )
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);