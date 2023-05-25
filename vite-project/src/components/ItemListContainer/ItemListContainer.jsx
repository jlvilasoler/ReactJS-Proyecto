import "./ItemListContainer.css"

const ItemListContainer = ({}) => {

    return (
        <div className="list_container">
                                    <img src="./imagenes/dulcedeleche-los-nietitos.png" alt="DULCE DE LECHE LOS NIETITOS"/>
                                    <h2 class="articulo">Dulce de Leche</h2>
                                    <h3 class="descripcion">700gr</h3>
                                    <p class="marca">LOS NIETITOS</p>
                                    <span class="precio">$ 150</span>
                                    <a href class="btn">AGREGAR</a>
        </div>

    )
}

export default ItemListContainer