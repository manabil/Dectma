import Carousel from "react-multi-carousel";
import meter1 from "../assets/hj.png";
import "react-multi-carousel/lib/styles.css";

export const Features = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
    <section className="feature" id="features">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="feature-bx wow zoomIn">
              <h2>Features</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme feature-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Deteksi Penyakit tomat menggunakan gambar daun</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Klasifikasi penyakit pada tomat</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Penjelasan terkait penyakit</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>
                    Merekomendasikan pengobatan yang tepat untuk mengatasi
                    penyakit
                  </h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
