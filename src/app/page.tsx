
import Footer from "@/components/footer";
import HomeHero from "@/components/homeHero";
import Navbar from "@/components/navbar";


export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="items-center">
        <HomeHero />
      </div>
      <Footer />
    </div>

  );
}
