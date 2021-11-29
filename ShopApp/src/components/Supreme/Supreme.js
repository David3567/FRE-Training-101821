import React from "react";
import dummyData from "./data";
import { withShopFeature } from "../../hoc/withShopFeature";
import Item from "../Item";

class Supreme extends React.Component {
    state = {
        items: dummyData
    }
    componentDidMount() {
        alert("Welcome to our page!")
    }
    render() {
        return (
            <div>
                {this.props.children}
                <section className="tems">
                    <h1>Available Items</h1>
                    <ul>
                        {this.state.items.map(item => {
                            return <Item key={item.id} info={item} onClick={() => { this.props.addToCart(item) }}>add to cart</Item>
                        })}
                    </ul>
                </section>
                <section className="cart">
                    <h1>Your Cart</h1>
                    <ul>
                        {this.props.cart.map(item => {
                            return <Item key={item.id} info={item} onClick={() => { this.props.removeFromCart(item.id) }}>remove</Item>
                        })}
                    </ul>
                </section>
            </div>)
    }
}

const Component = withShopFeature(Supreme);
export default Component;