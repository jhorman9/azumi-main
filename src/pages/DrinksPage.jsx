import '../assets/styles/drinks.css';
import { useNavigate } from 'react-router-dom';

export const DrinksPage = () => {

    const navigate = useNavigate();

    const toBack = () => {
        navigate('/');
    }

  return (
    <section className='container custom-drinks'>
        <div className="custom-drinks-back">
            <div className="main-back_page" onClick={toBack}>
                <i className="fa-solid fa-arrow-left"></i> <span className='back-text'>Regresar</span>
            </div>
        </div>
        <h1 className='custom-drinks_title'>BEBIDAS</h1>
        <p className='custom-drinks_subtitle'>En esta sección encontrarás una variedad de bebidas para acompañar tus platillos.</p>
        <div className="custom-drinks-body">
            <div className='custom-drinks-card'>
                <div className="custom-drinks-section">
                    <span className='custom-drinks-title title-color'>JUGOS NATURALES</span>
                    <ul className="custom-drinks-items">
                        <li className='custom-drinks-item'><span className='custom-drinks-items-name'>Fresa</span> <span className='custom-drinks-items-price'>$4.99</span></li>
                        <li className='custom-drinks-item'><span className='custom-drinks-items-name'>Maracuyá</span> <span className='custom-drinks-items-price'>$4.99</span></li>
                        <li className='custom-drinks-item'><span className='custom-drinks-items-name'>Mango</span> <span className='custom-drinks-items-price'>$4.99</span></li>
                        <li className='custom-drinks-item'><span className="custom-drinks-items-name">Limonada con hierba buena</span> <span className='custom-drinks-items-price'>$4.99</span></li>
                        <li className='custom-drinks-item'><span className="custom-drinks-items-name">Limonada</span> <span className='custom-drinks-items-price'>$4.99</span></li>
                        <li className='custom-drinks-item'><span className="custom-drinks-items-name">Limonada de coco</span> <span className='custom-drinks-items-price'>$4.99</span></li>
                    </ul>
                </div>
            </div>
            <div className='custom-drinks-card'>
                <div className="custom-drinks-section">
                    <span className='custom-drinks-title title-color'>CERVEZAS NACIONALES</span>
                    <ul className="custom-drinks-items">
                        <li className='custom-drinks-item'><span className='custom-drinks-items-name'>Panamá</span> <span className='custom-drinks-items-price'>$2.50</span></li>
                        <li className='custom-drinks-item'><span className='custom-drinks-items-name'>Panamá light</span> <span className='custom-drinks-items-price'>$2.50</span></li>
                        <li className='custom-drinks-item'><span className='custom-drinks-items-name'>Balboa roja</span> <span className='custom-drinks-items-price'>$2.50</span></li>
                    </ul>
                </div>
            </div>
            <div className='custom-drinks-card'>
                <div className="custom-drinks-section">
                    <span className='custom-drinks-title title-color'>COCTELES</span>
                    <ul className="custom-drinks-items">
                        <li className='custom-drinks-item'><span className='custom-drinks-items-name'>Margarita de maracuyá</span> <span className='custom-drinks-items-price'>$7.99</span></li>
                        <li className='custom-drinks-item'><span className='custom-drinks-items-name'>Margarita de limón</span> <span className='custom-drinks-items-price'>$7.99</span></li>
                        <li className='custom-drinks-item'><span className='custom-drinks-items-name'>Daiquirí de fresa</span> <span className='custom-drinks-items-price'>$7.99</span></li>
                        <li className='custom-drinks-item'><span className="custom-drinks-items-name">Daiquirí de maracuyá</span> <span className='custom-drinks-items-price'>$7.99</span></li>
                        <li className='custom-drinks-item'><span className="custom-drinks-items-name">Daiquirí de limón</span> <span className='custom-drinks-items-price'>$7.99</span></li>
                        <li className='custom-drinks-item'><span className="custom-drinks-items-name">Sangría</span> <span className='custom-drinks-items-price'>$7.99</span></li>
                        <li className='custom-drinks-item'><span className="custom-drinks-items-name">Mojito de maracuyá</span> <span className='custom-drinks-items-price'>$8.99</span></li>
                        <li className='custom-drinks-item'><span className="custom-drinks-items-name">Mojito de fresa</span> <span className='custom-drinks-items-price'>$8.99</span></li>
                        <li className='custom-drinks-item'><span className="custom-drinks-items-name">Mojito de limón</span> <span className='custom-drinks-items-price'>$8.99</span></li>
                    </ul>
                </div>
            </div>
            <div className='custom-drinks-card'>
                <div className="custom-drinks-section">
                    <span className='custom-drinks-title title-color'>CERVEZAS INTERNACIONALES</span>
                    <ul className="custom-drinks-items">
                        <li className='custom-drinks-item'><span className='custom-drinks-items-name'>Corona</span> <span className='custom-drinks-items-price'>$3.50</span></li>
                        <li className='custom-drinks-item'><span className='custom-drinks-items-name'>Haineken</span> <span className='custom-drinks-items-price'>$3.50</span></li>
                        <li className='custom-drinks-item'><span className='custom-drinks-items-name'>Modelo</span> <span className='custom-drinks-items-price'>$3.00</span></li>
                        <li className='custom-drinks-item'><span className="custom-drinks-items-name">Sapporo light</span> <span className='custom-drinks-items-price'>$3.99</span></li>
                        <li className='custom-drinks-item'><span className="custom-drinks-items-name">Sapporo premium</span> <span className='custom-drinks-items-price'>$3.99</span></li>
                        <li className='custom-drinks-item'><span className="custom-drinks-items-name">Sapporo black</span> <span className='custom-drinks-items-price'>$3.99</span></li>
                    </ul>
                </div>
            </div>
            <div className='custom-drinks-card'>
                <div className="custom-drinks-section">
                    <span className='custom-drinks-title title-color'>CUBETAZOS</span>
                    <ul className="custom-drinks-items">
                        <li className='custom-drinks-item'><span className='custom-drinks-items-name'>Panamá, Panamá light</span> <span className='custom-drinks-items-price'>$10.50</span></li>
                        <li className='custom-drinks-item'><span className='custom-drinks-items-name'>Modelo</span> <span className='custom-drinks-items-price'>$16.99</span></li>
                        <li className='custom-drinks-item'><span className='custom-drinks-items-name'>Heineken, corona</span> <span className='custom-drinks-items-price'>$18.99</span></li>
                    </ul>
                </div>
            </div>
            <div className='custom-drinks-card'>
                <div className="custom-drinks-section">
                    <span className='custom-drinks-title title-color'>TRAGOS</span>
                    <ul className="custom-drinks-items">
                        <li className='custom-drinks-item'><span className='custom-drinks-items-name'>Ron abuelo</span> <span className='custom-drinks-items-price'>$6.99</span></li>
                        <li className='custom-drinks-item'><span className='custom-drinks-items-name'>Buchanan&apos;s 12</span> <span className='custom-drinks-items-price'>$8.00</span></li>
                        <li className='custom-drinks-item'><span className='custom-drinks-items-name'>Buchanan&apos;s 18</span> <span className='custom-drinks-items-price'>$10.00</span></li>
                        <li className='custom-drinks-item'><span className="custom-drinks-items-name">Old Parr 12</span> <span className='custom-drinks-items-price'>$8.00</span></li>
                        <li className='custom-drinks-item'><span className="custom-drinks-items-name">Old Parr 18</span> <span className='custom-drinks-items-price'>$10.00</span></li>
                        <li className='custom-drinks-item'><span className="custom-drinks-items-name">Tequila José Cuervo</span> <span className='custom-drinks-items-price'>$3.50</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}
