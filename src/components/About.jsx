import { Container } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import daun from "../assets/daun1.png";
import user1 from "../assets/inoyy.jpeg";
import user2 from "../assets/galan.jpg";
import user3 from "../assets/fakhrul.jpg";
import user4 from "../assets/ammar.jpeg";

export const About = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="about" id="about">
      <Container>
        <div className="d-flex">
          <div className="image">
            <img src={daun} alt="About_image" />
          </div>
          <div className="wrap-text">
            <h2 className="tag">About</h2>
            <p>
              Tomat merupakan salah satu tanaman hortikultura yang banyak
              ditemukan di Indonesia. Tomat terkenal sebagai tanaman yang rentan
              terhadap penyakit. Penyakit ini dapat dikenali dengan melihat
              perubahan fisik pada tanaman seperti daun. Jika sudah terjangkit
              penyakit tersebut, perlu adanya penanganan yang tepat agar tidak
              terjadi gagal panen. <br /> Untuk itu dibuatlah proyek ini untuk
              mengklasifikasikan penyakit pada tomat berdasarkan gambar daun
              beserta deskripsi dan pengobatan penyakit tersebut menggunakan
              machine learning. Proyek ini disebut Dectma.
            </p>
          </div>
        </div>
      </Container>
      <div className="row">
        <div className="col-12">
          <div className="about-bx wow zoomIn">
            <Carousel
              responsive={responsive}
              infinite={true}
              className="owl-carousel owl-theme about-slider"
            >
              <div className="item">
                <img src={user1} alt="Sutrisno" />
                <h5>Sutrisno</h5>
              </div>
              <div className="item">
                <img src={user4} alt="Muhammad Ammar Nabil" />
                <h5>Muhammad Ammar Nabil</h5>
              </div>
              <div className="item">
                <img src={user3} alt="Muhammad Fakhrul Amin" />
                <h5>Muhammad Fakhrul Amin</h5>
              </div>
              <div className="item">
                <img src={user2} alt="Galan Ahmad Defanka" />
                <h5>Galan Ahmad Defanka </h5>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};
