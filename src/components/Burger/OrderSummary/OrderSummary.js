import React from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map((igKey, i) => {
            return (
                <li key={igKey + i}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
                </li>
            );
        });

    return (
        <Aux>
            <h2>Your Order</h2>
            <p>Your delicious burger with the following ingredients</p>
            <ul>{ingredientSummary}</ul>
            <p><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button type="Danger" clicked={props.close}>CANCEL</Button>
            <Button type="Success">CONTINUE</Button>
        </Aux>
    )
}

export default orderSummary;