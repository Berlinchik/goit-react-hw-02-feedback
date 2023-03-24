import React, { Component } from 'react';
import {ButtonsBox, Button} from './FeedbackOptions.styled'

class FeedbackOptions extends Component{
    render() {
        const { options, onLeaveFeedback } = this.props
        return <ButtonsBox>
            {options.map(el => <Button key={el} onClick={()=>onLeaveFeedback(el)}>{el}</Button>)}
        </ButtonsBox>
    }
}

export default FeedbackOptions;