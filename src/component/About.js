import { Container } from "react-bootstrap";
import daun from "../assets/daun1.png";

export const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <div className="d-flex">
          <div className="image">
            <img src={daun} />
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
    </section>
  );
};
