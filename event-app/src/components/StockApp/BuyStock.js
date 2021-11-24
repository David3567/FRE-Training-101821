import React from "react";
import { withBuyStockData } from "../../HOC/withBuyStock";

const BuyStock = (props) => {
	return (
		<section>
			<header>Buy</header>
			<h1>
				How Many Stock you want to buy!!!!!
				<button onClick={props.handleAdd}>+</button>
				<span>{props.stockNum}</span>
				<button onClick={props.handleSub}> -</button>
			</h1>
		</section>
	);
};

const BuyStockContainer = withBuyStockData(BuyStock);

export default BuyStockContainer;
