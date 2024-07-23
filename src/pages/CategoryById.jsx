import { useParams } from "react-router-dom";
import menuJson from '../data/main.json';

export const CategoryById = () => {

    const statusCategory = {
        'Japones': 'japanese',
        'Chino': 'chinese',
        'Peruano': 'peruvian',
        'Thailandes': 'thai',
        'Especialidades de la casa': 'home'
    };

    const statusSubCategory = {
        'Platos fuertes': 'dishes',
        'Entradas': 'entrees',
        'Sopas': 'soups',
        'Vegetales': 'vegetables'
    };

    const { category, dishes } = useParams();
    const filterData = menuJson.filter(main => statusCategory[main.categoria] == dishes && statusSubCategory[main.subcategoria] == category );
    const orderedData = filterData.sort((a, b) => a.nombre.localeCompare(b.nombre));
    const sortedMain = menuJson.sort((a,b) => a.nombre.localeCompare(b.nombre));

  return (
    <section className="main-category">
        <div className="card">
            {
                category == 'all' 
                ?sortedMain.map((data) => (
                    <div className="card-body" key={data.id}>
                        <h2>{data.nombre}</h2>
                        <small>{data.descripcion}</small>
                        <h4>{data.precio}</h4>
                    </div>
                )):
                orderedData.map((data) => (
                    <div className="card-body" key={data.id}>
                        <h2>{data.nombre}</h2>
                        <small>{data.descripcion}</small>
                        <h4>{data.precio}</h4>
                    </div>
                ))
            }
        </div>
    </section>
  )
}
