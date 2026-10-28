import '../styles/Home.scss';
import logo from '../assets/logoTD.png';

function Home() {
  return (
    <main className="garage">
      <header>
        <h1>
          <img src={logo} alt="Logo" />
          Bienvenue
        </h1>
      </header>
      <section>
        <button>Les voitures de légendes</button>
        <button>Evenements</button>
        <button>Rénovations</button>
        <button>Contact</button>
      </section>
      <footer>
        
      </footer>
    </main>
  );
}

export default Home;
