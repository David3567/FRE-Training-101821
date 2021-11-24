import React, { useState } from "react";
import BuyStock from "./BuyStock";
import StockCalculator from "./StockCalculator";

const StockApp = () => {
	// state = {
	// 	BuyStock: false,
	// 	StockCalCulator: false,
	// };
	const [activePage, setActivePage] = useState({
		BuyStock: false,
		StockCalculator: false,
	});

	const hanldeBuyStockPage = (e) => {
		e.preventDefault();
		setActivePage({ BuyStock: true, StockCalculator: false });
	};
	const hanldeStockCalCulatorPage = (e) => {
		e.preventDefault();

		setActivePage({ BuyStock: false, StockCalculator: true });
	};

	return (
		<div>
			<header>
				<a
					href="#"
					onClick={hanldeBuyStockPage}
					style={{ marginRight: "20px" }}
				>
					BuyStock
				</a>
				<a href="#" onClick={hanldeStockCalCulatorPage}>
					StockCalCulator
				</a>
			</header>
			{activePage.BuyStock ? <BuyStock /> : null}
			{activePage.StockCalculator ? <StockCalculator /> : null}
		</div>
	);
};

export default StockApp;
