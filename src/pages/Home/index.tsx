import { ReactComponent as MainImage } from "../../assets/images/Desenho.svg";
import LoginCard from "../../components/LoginCard";
import "./styles.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Avalie Filmes</h1>
        <p>Diga o que você achou do seu filme favorito</p>
        <div className="home-main-image">
          <MainImage />
        </div>
      </div>
      <div>
        <LoginCard />
      </div>
    </div>
  );
};

export default Home;
