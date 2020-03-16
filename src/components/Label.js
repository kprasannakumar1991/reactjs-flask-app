import React from 'react'
import { Statistic } from 'semantic-ui-react'

const Label = (props) => <Statistic.Group size={'mini'} items={props.items} />
export default Label;