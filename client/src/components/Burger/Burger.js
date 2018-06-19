import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import classes from './Burger.css';

const Burger = (props) => {
    var transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])]
                .map((_, i) => {
                    return <BurgerIngredient key={igKey + i} type={igKey} />
                });
        })
        .reduce((arr, curr) => {
            return arr.concat(curr)
        }, [])

    if (transformedIngredients.length < 1) {
        transformedIngredients = <div className={classes.Message}> Please add Ingredients to your Burger!!</div>
    }
    return (
        < div className={classes.Burger} >
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div >
    )
}

export default Burger;