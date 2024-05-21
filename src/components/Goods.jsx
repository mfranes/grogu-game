import GoodItem from './GoodItem.jsx';

function Goods({goods}) {

    const goodItems = (goods) => {
        // Crea un array del tamaño de la cantidad de goods
        const goodsSizeArray = Array(goods.length).fill(null);

        // Crea un nuevo array, a partir de itemsArray, donde cada elemento es un JSX de tipo <GoodItem />
        const jsxGoods = goodsSizeArray.map(
            // Por cada iteracion, lo unico que se necesita es el indice (i) no su valor (null). Entonces queda (_, i), donde _ = el valor null, e i el indice
            (_, i) => {
                // El tipo de good que llegue; galleta, huevo o rana (el icono ese)
                const goodType = goods[i];
                // Al ser un componente reutilizable, lo hago mas unico agregando a la key el tipo de good (galleta, huevo, rana)
                const key = `goodItem-${goodType}-${i}`;
                // Paso como value el tipo de good, el que luego se pintara de acuerdo a como diga el hijo, el <GoodItem />
                return <GoodItem key={key} value={goodType}/>
            }
        );

        return jsxGoods;
    }


    return (
        <section className="goods-container">
            {goodItems(goods)}
        </section>
    )
}

export default Goods
