import React from "react";

const Item = (props) => {
    const { info, ...rest } = props;
    const { item_name, price } = info;

    return (
        <li className="item-info">
            <span>{item_name}</span>
            <span>{`$${price}`}</span>
            <button {...rest}>{props.children}</button>
        </li>
    )
}

export default Item;