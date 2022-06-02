import Banner from '../../components/banner/Banner';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import Products from '../../components/products/Products';
import TermPayment from '../../components/term-payment/TermPayment';



function Home() {
  return (
    <div className="home">
     <Navbar/>
     <Banner/>
     <Products/>
     <TermPayment/>
     <Footer/>
    </div>
  );
}

export default Home;
