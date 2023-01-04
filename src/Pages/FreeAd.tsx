import { divBg, workPage } from "../Components/cssBundled";
import { IonIcon } from "@ionic/react";
import { cashOutline, calculatorOutline, shirtOutline, starOutline, fileTrayStackedOutline, callOutline, mailOutline, imageOutline } from "ionicons/icons";
import { useState } from "react";

const FreeAd = () => {
  const [formData,setFormData] = useState({
    name:"",
    price:0,
    units:0,
    condition:"",
    category:"",
    phone:"",
    email:"",
    description:""
  })

  const [formImage,setFormImage] = useState<any>();
  const bg: any = divBg("https://ngratesc.sirv.com/Aurora/freeAd.jpg");

  const submitForm=(e:any)=>{
    e.preventDefault();
    
  }
  return (
    <div style={bg}>
      <div className=" page row d-flex justify-contnet-center flex-row align-items-center">
        <div className="col-sm">
          <h1 className="display-1 gradText"><b>Post Your Free Ad</b></h1>
          <div>
            <form onSubmit={(e)=>submitForm(e)}>
              <div className="row">
                <div className="col-sm">
                    <div className="input-group mb-3">
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Item/Product Name"
                  />
                  <button type="button" className="btn btnPrimary"><IonIcon icon={shirtOutline}/></button>
                    </div>
                  
                </div>
                <div className="col-sm">
                    <div className="input-group mb-3">
                    <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    placeholder="Upload image"
                  />
                  <button type="button" className="btn btnPrimary"><IonIcon icon={imageOutline}/></button>
                    </div>
                  
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <div className="input-group mb-3">
                    <input
                      className="form-control "
                      placeholder="Price per unit"
                    />
                    <button className="btn btnPrimary">
                      <IonIcon icon={cashOutline} color="#fff" />
                    </button>
                  </div>
                </div>
                <div className="col-sm">
                    <div className="input-group mb-3">
                        <input  className="form-control" placeholder="Total Units Available?"/>
                        <button type="button" className="btn btnPrimary"><IonIcon icon={calculatorOutline}/></button>
                    </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                    <div className="input-group mb-3">
                        <select className="form-control">
                            <option disabled>Condition</option>
                            <option>Brand new</option>
                            <option>Used - good condtion</option>
                            <option>Used - functioning okay</option>
                            <option>Old - functioning</option>
                            <option>Not working</option>
                        </select>
                        <button type="button" className="btn btnPrimary">
                            <IonIcon icon={starOutline}/>
                        </button>
                    </div>
                </div>
                <div className="col-sm">
                    <div className="input-group mb-3">
                        <select className="form-control">
                            <option disabled>Category</option>
                            <option>Electronics</option>
                            <option>Clothing</option>
                            <option>Vehicles</option>
                            <option>Tools</option>
                            <option>Other</option>
                        </select>
                        <button type="button" className="btn btnPrimary"><IonIcon icon={fileTrayStackedOutline}/></button>
                    </div>
                </div>
                
              </div>
              <div className="row">
                <div className="col-sm">
                    <div className="input-group mb-3">
                        <input type="tel" className="form-control" placeholder="Whatsapp / Phone Number"/>
                        <button type="button" className="btn btnPrimary" ><IonIcon icon={callOutline}/></button>
                    </div>
                </div>
                <div className="col-sm">
                    <div className="input-group mb-3">
                    <input type="email" className="form-control" placeholder="Email"/>
                        <button type="button" className="btn btnPrimary" ><IonIcon icon={mailOutline}/></button>
                     </div>
                </div>

              </div>
              <div className="row">
                <div className="col-sm mb-3">
                <textarea className="form-control" placeholder="Description"></textarea>

                </div>
              </div>
              <button type="submit" className="btn btnPrimary">Lets Go!</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeAd;
