import React, {useState, useEffect} from 'react';

import Label from './Label';
import Chart from './Chart';

const Resource = (props) => {
    // a REST call is made after every refreshInterval
    const refreshInterval = props.refreshInterval;
    // max number of values to be displayed in chart
    const samples = props.samples;

    const [currentValue, setCurrentValue] = useState({'cpu':0, 'memory':0});
    const [values, setValues] = useState([]);

    useEffect(()=> {
        const interval = setInterval(()=> {
            // calling the backend api every {refreshInterval}
            fetch("/resource")
                .then(res => res.json())
                .then(data => {
                  // got a response back from server
                    const usage = {
                        'cpu': data.cpu,
                        'memory': data.memory
                    }

                    setCurrentValue(usage);

                    // Storing previous values
                    setValues(previousValues => {
                        if (previousValues.length < samples) {
                            return [...previousValues, usage];
                        } else {
                            return [previousValues[previousValues.length-1]];
                        }
                    })
                })

        }, refreshInterval)

        return ()=>clearInterval(interval);
    }, []);

    const items = [
        {key: 'cpu', label: 'cpu usage', value: currentValue.cpu + ' %'},
        {key: 'memory', label: 'memory usage', value: currentValue.memory + ' %'}
    ]

    return (
        <div>
            <div className="ui divider"></div>
            <div className="ui raised segment">
                <Label items={items}/>
            </div>
            <Chart
                cpuValues={values.map((item) => item.cpu)}
                memoryValues={values.map((item) => item.memory)}
                samples={samples}
            />
        </div>
    )
}

export default Resource;
