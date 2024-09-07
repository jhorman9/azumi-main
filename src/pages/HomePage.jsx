import HomeComponent from '../components/HomeComponents/HomeComponent';
import HomeComponent2 from '../components/HomeComponents/HomeComponent2';
import '../assets/styles/home.css';

const HomePage = () => {

  const styleSection = {
    textAlign: 'center',
    marginBottom: '0px',
    padding: '0',
    maxWidth: 'inherit'
  }

  return (
    <section style={styleSection}>
        <HomeComponent />
        <HomeComponent2 />
    </section>
  )
}

export default HomePage;