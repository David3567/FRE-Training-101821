import { useState } from "react"

function useStockAddSub(initialStock) {
    const [stock, setStock] = useState(initialStock);

    const handleAdd = () => {
        setStock(stock => stock + 1)
    }

    const handleSub = () => {
        setStock(stock => stock - 1 < 0 ? 0 : stock - 1);
    }

    return [stock, handleAdd, handleSub];
}

export default useStockAddSub;