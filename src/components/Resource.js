import React, {useState, useEffect} from 'react';

import {Label as SemanticLabel} from 'semantic-ui-react';

import Label from './Label';
import Chart from './Chart';

const Resource = (props) => {
    // a REST call is made after every refreshInterval
    const refreshInterval = props.refreshInterval;
    // max number of values to be displayed in chart
    const samples = props.samples;

    const [currentValue, setCurrentValue] = useState({'cpu':0, 'memory':0});
    const [values, setValues] = useState([]);

    const [currentGpus, setCurrentGpus] = useState([])

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

                    setCurrentGpus(data.gpus);
                })

        }, refreshInterval)

        return ()=>clearInterval(interval);
    }, []);

    const items = [
        {key: 'cpu', label: 'cpu usage', value: currentValue.cpu + ' %'},
        {key: 'memory', label: 'memory usage', value: currentValue.memory + ' %'}
    ]

    const gpuItems = []
    for (var index=0; index < currentGpus.length; index++) {
        var gpu = currentGpus[index];

        var item = {
            key: `gpu +${index}`,
            label: `${gpu.name}`,
            value: `${gpu.load} %`
        }

        gpuItems.push(item);
    }

    function renderGpuInformation () {
        if (currentGpus.length > 0) {
            return (
                <div>
                    <br/>
                    <SemanticLabel>GPUs</SemanticLabel>
                    <Label items={gpuItems}/>
                    <div className="ui divider"></div>
                </div>
            )
        }

        return null;
    }

    function renderCpuAndMemoryInformation() {
        return (
            <div>
                <br/>
                <SemanticLabel>CPU and Memory</SemanticLabel>
                <Label items={items}/>
                <Chart
                    cpuValues={values.map((item) => item.cpu)}
                    memoryValues={values.map((item) => item.memory)}
                    samples={samples}
                />
            </div>
        )
    }

    return (
        <div>
            <div className="ui divider"></div>
                {renderGpuInformation()}
                {renderCpuAndMemoryInformation()}
        </div>
    )
}

export default Resource;
