import HomeComponent from '../components/HomeComponents/HomeComponent';

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
    </section>
  )
}

export default HomePage;