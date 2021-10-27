import type { NextPage } from "next";
// Import next component image + all links of static folder
import Image from "next/image";
import headerBand from "@/public/static/images/headerBand.png";
import img1 from "@/public/static/images/img1.png";
import img2 from "@/public/static/images/img2.png";
import img3 from "@/public/static/images/img3.png";
import img4 from "@/public/static/images/img4.png";
import footer from "@/public/static/images/footer.png";
// Import components
import CarouselHome from "@/components/Carousels/Home";

const Home: NextPage = () => {
  return (
    <div>
      <div>
        <Image src={headerBand} alt="home" />
      </div>
      <div>
        {/* Use the package npm i next-videos to play video */}
        <video src={require("../assets/videos/rbVideo.webm")} autoPlay loop />
      </div>
      <div className="carouselHome">
        <h2>Our Iconic Aviator</h2>
        <CarouselHome />
      </div>
      <div>
        <Image src={img1} alt="home" />
      </div>
      <div>
        <Image src={img2} alt="home" />
      </div>
      <div>
        <Image src={img3} alt="home" />
      </div>
      <div>
        <Image src={img4} alt="home" />
      </div>
      <div>
        <Image src={footer} alt="home" />
      </div>
    </div>
  );
};

export default Home;
