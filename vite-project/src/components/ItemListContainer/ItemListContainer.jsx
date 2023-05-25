import "/src/components/ItemListContainer/ItemListContainer.scss"
import producto1 from "/src/assets/img/dulcedeleche-los-nietitos.png";

const ItemListContainer = ({}) => {

    return (
        <div className="list_container">
                                    <img src={producto1} alt="Dulce de leche - Los Nietitos"/>
                                    <h2 class="articulo">Dulce de Leche</h2>
                                    <h3 class="descripcion">700gr</h3>
                                    <p class="marca">LOS NIETITOS</p>
                                    <span class="precio">$ 150</span>
                                    <a href class="boton">AGREGAR</a>
        </div>

    )
}

export default ItemListContainer