import '../styles/Home.scss';
import logo from '../assets/logoTD.png';

function Home() {
  return (
    <main className="garage">
      <header>
        <img src={logo} alt="Logo" />
        <h1>Bienvenue</h1>
      </header>
                <section>
          <button>Les voitures de légendes</button>
          <button>Evenements</button>
          <button>Rénovations</button>
          <button>Contact</button>
        </section>
    </main>
  );
}

export default Home;
