import store from '../Redux/StockAppRedux'

const MyStock = () => {

    const myStock = store.getState();

    return (
        <section>
            <h1>This is my stock page{myStock}</h1>
        </section>
    )
}

export default MyStock;