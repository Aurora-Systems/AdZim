import { IonIcon } from "@ionic/react";
import { search } from "ionicons/icons";
import logo from "../assets/logo.png";
import { divBg, workPage } from "../Components/cssBundled";

const Home = () => {
  const bg: any = divBg("https://ngratesc.sirv.com/Aurora/homeAdZim.jpg");
  return (
    <div className="container-fluid m-0 p-0">
      <div className={workPage}>
        <div
          className="page  d-flex justify-content-center align-items-center sirv"
          style={bg}
        >
          <div className="text-center">
            <div className="input-group mb-3 searchbar">
              <input
                className="form-control "
                placeholder="What are you looking for?"
              />
              <button className="btn btnPrimary">
                <IonIcon icon={search} color="#fff" />
              </button>
            </div>
          </div>
        </div>
        <div className="page m-5">
          <div className="container row d-flex align-items-center text-center ">
            <div className="col-sm">
              <img src={logo} className="Sirv" />
            </div>
            <div className="col-sm">
              <h1 className="display-3">
                Advertise For <b className="specialText">FREE</b>
              </h1>
              <p>
                Get your product out there! When you post on AdZim your ad is
                shared to other social media platforms for <strong>free</strong>
                . No signup required, no future payments. Post it here once,
                spread the word everywhere!
              </p>
              <a href="/freeAd"><button className="btn btnPrimary">Post Free Ad</button></a>
            </div>
          </div>
        </div>
        <div className="page m-5 text-center">
          <div>
            <h1 className="display-2">How It Works</h1>
          </div>
          <br/>
          <div className="row">
                <div className="col-sm">
                <img
                    className="Sirv"
                    data-src="https://ngratesc.sirv.com/Aurora/1.png"
                    alt=""
                />
                <p>
                    <b>1.</b> Post your ad onto our site
                </p>
                </div>
                <div className="col-sm">
                <img
                    className="Sirv"
                    data-src="https://ngratesc.sirv.com/Aurora/2.png"
                    alt=""
                />
                <p>
                    <b>2.</b> We forward your ad to popular platforms, insta,
                    facebook, whatsapp groups!
                </p>
                </div>
                <div className="col-sm">
                <img
                    className="Sirv"
                    data-src="https://ngratesc.sirv.com/Aurora/3.png"
                    alt=""
                />
                <p>
                    <b>3.</b> Sell your product and get more leads faster with 0%
                    fees from us
                </p>
                </div>
          </div>

          <div className="text-center">
          <button className="btn btnPrimary">Get Strated</button>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
