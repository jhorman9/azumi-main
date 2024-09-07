import sushi from '../../../public/fotos-menu/photo/sushi.jpg';

const HomeComponent2 = () => {
  return (
    <section className='home-about'>
        <div className='home-about_container'>
            <div className='home-about_text'>
                <small>About Us</small>
                <h2 className="big-text">Where Quality Meet Excelent Service</h2>
                <p>Discover the artistry of Sushi, a symphony of fresh flavors and textures. Our meticulously crafted bites showcase the perfect fusion of tradition...</p>
                <p>Our Sushi offerings are a symphony of fresh, high-quality ingredients meticulously crafted into bite-sized...</p>
                <div className="home-about_text-icons">
                    <div className="home-about_text-icons_sushi">
                        <img src={sushi} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatibus sint esse eveniet ab accusamus. Blanditiis ipsum labore, officia excepturi, quaerat natus commodi, quasi exercitationem neque fugit deserunt repellat unde.</p>
                    </div>
                    <div className="home-about_text-icons_dishes">
                        <img src={sushi}alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quibusdam placeat ipsa incidunt, pariatur labore velit nemo corrupti perspiciatis nam voluptatibus perferendis, quae ipsum temporibus officiis dicta aperiam cumque at.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeComponent2;
