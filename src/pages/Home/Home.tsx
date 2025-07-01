import NavBar from "../../components/NavBar/NavBar";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import SectionCards from "../../components/SectionCards/SectionCards";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="page-content">
        <Banner />
        <SectionCards/>
        {/* Aqui você pode incluir cards, seções, etc */}
      </div>
      <Footer />
    </>
  );
}
