import Banner from "../components/Banner";
import TopBrands from "../components/TopBrands";

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
            </div>
      );
};

export default Home;