import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

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
            <p>Total Price: {props.totalPrice}</p>
            <p style={{textAlign: 'center'}}>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    )
}

export default OrderSummary;