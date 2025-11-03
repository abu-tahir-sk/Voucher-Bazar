import Banner from "../components/Banner";
import BrandsSell from "../components/BrandsSell";
import TopBrands from "../components/TopBrands";
import TopDeals from "../components/TopDeals";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
      return (
            <div>
                <div>
                  <Banner/>
                  </div> 
                  <div>
                        <h2 className="text-center text-3xl font-extrabold">Top Brands</h2>
                        <TopBrands/>
                  </div>
                  <div>
                        <BrandsSell/>
                  </div>
                  <div>
                        <TopDeals/>
                  </div>
                  <div>
                        <WhyChooseUs/>
                  </div>
            </div>
      );
};

export default Home;