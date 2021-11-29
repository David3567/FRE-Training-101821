import React from "react";
import { connect } from "react-redux";
import { addToTotal, removeFromTotal } from "../action/";
import { Link } from "react-router-dom";

export const withShopFeature = (WrapperComponent) => connect((state) => {
    return {
        total: state.totalItems,
    }
}, { addToTotal, removeFromTotal })
    (class NewComponent extends React.Component {
        state = {
            cart: [],
        }
        addToCart = (item) => {
            console.log(this.props.total);
            this.setState({ cart: [...this.state.cart, item] })
            this.props.addToTotal();

        }
        removeFromCart = (id) => {
            this.setState({ cart: this.state.cart.filter(item => item.id !== id) })
            this.props.removeFromTotal();
        }
        render() {
            return (
                <WrapperComponent
                    cart={this.state.cart}
                    addToCart={this.addToCart}
                    removeFromCart={this.removeFromCart}
                >
                    <>
                        <h1>{`${this.props.total} items total`}</h1>
                        <Link to="/homepage" alt="go to homepage">Home Page</Link>
                    </>
                </WrapperComponent>
            )
        }
    })