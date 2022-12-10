import { Container } from 'react-bootstrap';
import vector from '../assets/t.png';

export const Home = () => {
  return (
    <section className="home" id="home">
      <Container>
        <div className="d-flex">
          <div className="wrap-text">
            <span className="tagline">Dectma</span>
            <h1>Realtime Image Classification and Recognition with Roboflow</h1>
            <a href="/classify" className="btn-success btn">
              Detect My Plant
            </a>
          </div>
          <div className="image">
            <img src={vector} alt="hero" />
          </div>
        </div>
      </Container>
    </section>
  );
};
