import React from 'react';
import Aux from '../../../hoc/Aux/Aux';

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey =>
            <li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}>
                    {igKey}
                </span>
                : {props.ingredients[igKey]}
            </li>
        );
    return (
        <Aux>
            <h3 style={{textAlign: 'center'}}>Your Order</h3>
            <p>A Delicious Burger with the following: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p style={{textAlign: 'center'}}>Continue to Checkout?</p>
        </Aux>
    )
}

export default OrderSummary;