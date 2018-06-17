import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICE = {
    salad: 10,
    cheese: 5,
    meat: 15,
    bacon: 20
}
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        purchasable: false,
        showModal: false,
        totalPrice: 10,

    }

    purchaseContinueHandler = () => {
        alert('Your Order is Placed!!');
    }

    cancelPurchaseHandler = () => {
        this.setState({ showModal: false })
    }

    purchaseHandler = () => {
        this.setState({ showModal: true })
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(igKey => ingredients[igKey])
            .reduce((sum, curr) => sum + curr, 0);

        this.setState({ purchasable: sum > 0 })
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount + 1
        const updatedIngredient = {
            ...this.state.ingredients
        }
        updatedIngredient[type] = updatedCount;
        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice + INGREDIENT_PRICE[type]
        this.setState({ ingredients: updatedIngredient, totalPrice: updatedPrice });
        this.updatePurchaseState(updatedIngredient);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        if (oldCount > 0) {
            const updatedCount = oldCount - 1
            const updatedIngredient = {
                ...this.state.ingredients
            }
            updatedIngredient[type] = updatedCount;
            const oldPrice = this.state.totalPrice;
            const updatedPrice = oldPrice - INGREDIENT_PRICE[type]
            this.setState({ ingredients: updatedIngredient, totalPrice: updatedPrice })
            this.updatePurchaseState(updatedIngredient);
        }
    }


    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Aux>
                <Modal show={this.state.showModal} canceled={this.cancelPurchaseHandler}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        purchaseCanceled={this.cancelPurchaseHandler}
                        purchaseContinued={this.purchaseContinueHandler}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler} />
            </Aux>
        )
    }
}

export default BurgerBuilder;