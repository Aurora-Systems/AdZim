import { divBg, } from "../Components/cssBundled";
import { IonIcon } from "@ionic/react";
import { cashOutline, calculatorOutline, shirtOutline, starOutline, fileTrayStackedOutline, callOutline, mailOutline, imageOutline } from "ionicons/icons";
import { useState } from "react";
import placeholder from "../assets/placeholder.jpg"
import { useNavigate } from "react-router-dom";

export interface uploadData{
    name: string,
    price: any,
    units: any,
    condition: string,
    category: string,
    phone: string,
    description: string,
    img:any
}

const FreeAd = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<uploadData>({
    name: "",
    price: 0,
    units: 0,
    condition: "Brand New",
    category: "Electronics",
    phone: "",
    description: "",
    img:placeholder
  })
  const [showForms, setShowForms] = useState({
    edit: false,
    preview: true
  })


  const [formImage, setFormImage] = useState<any>(placeholder);
  const bg: any = divBg("https://ngratesc.sirv.com/Aurora/freeAd.jpg");



  const submitForm = (e: any) => {
    e.preventDefault();
    navigate("/previewAd", {state:{formData}})
    console.log(formData)
    // setShowForms({ ...showForms, edit: true, preview: false })

  }

 

  return (
    <div style={bg}>
      <div className=" page row d-flex justify-contnet-center flex-row align-items-center">
        <div className="col-sm" >
          <h1 className="display-1 gradText"><b>Post Your Free Ad</b></h1>
          <div>
            <form onSubmit={(e) => submitForm(e)}>
              <div className="row">
                <div className="col-sm">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Item/Product Name"
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                    <button type="button" className="btn btnPrimary"><IonIcon icon={shirtOutline} /></button>
                  </div>

                </div>
                <div className="col-sm">
                  <div className="input-group mb-3">
                    <input
                      type="file"
                      accept="image/*"
                      className="form-control"
                      placeholder="Upload image"
                      required
                      onChange={(e: any) => { setFormData({...formData, img:e.target.files[0]})}}

                    />
                    <button type="button" className="btn btnPrimary"><IonIcon icon={imageOutline} /></button>
                  </div>

                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <div className="input-group mb-3">
                    <input type="text" className="form-control " placeholder="Price per unit"  onChange={(e) => setFormData({ ...formData, price: e.target.value })} required />
                    <button className="btn btnPrimary">
                      <IonIcon icon={cashOutline} color="#fff" />
                    </button>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="input-group mb-3">
                    <input type="number" required className="form-control" placeholder="Total Units Available?"  onChange={(e) => setFormData({ ...formData, units: e.target.value })} />
                    <button type="button" className="btn btnPrimary"><IonIcon icon={calculatorOutline} /></button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <span><b>Condition</b></span>

                  <div className="input-group mb-3">
                    <select className="form-control" required onChange={(e) => setFormData({ ...formData, condition: e.target.value })}>
                      {/* <option disabled selected>Condition</option> */}
                      <option defaultValue="Brand New" value="Brand New">Brand new</option>
                      <option value="Used - Good Condition">Used - good condtion</option>
                      <option value="Used Functioning Okay">Used - functioning okay</option>
                      <option value="Old - Functioning">Old - functioning</option>
                      <option value="Not working">Not working</option>
                    </select>
                    <button type="button" className="btn btnPrimary">
                      <IonIcon icon={starOutline} />
                    </button>
                  </div>
                </div>
                <div className="col-sm">
                  <span><b>Category</b></span>
                  <div className="input-group mb-3">
                    <select className="form-control" required onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
                      {/* <option disabled>Category</option> */}
                      <option defaultValue="Electronics" value="Electronics">Electronics</option>
                      <option value="Clothing">Clothing</option>
                      <option value="Vehicles">Vehicles</option>
                      <option value="tools">Tools</option>
                      <option value="Other">Other</option>
                    </select>
                    <button type="button" className="btn btnPrimary"><IonIcon icon={fileTrayStackedOutline} /></button>
                  </div>
                </div>

              </div>
              <div className="row">
                <div className="col-sm">
                  <div className="input-group mb-3">
                    <input type="tel" required className="form-control" placeholder="Whatsapp / Phone Number" onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                    <button type="button" className="btn btnPrimary" ><IonIcon icon={callOutline} /></button>
                  </div>
                </div>
                {/* <div className="col-sm">
                    <div className="input-group mb-3">
                    <input type="email" className="form-control" placeholder="Email"/>
                        <button type="button" className="btn btnPrimary" ><IonIcon icon={mailOutline}/></button>
                     </div>
                </div> */}

              </div>
              <div className="row">
                <div className="col-sm mb-3">
                  <textarea className="form-control" required placeholder="Description" onChange={(e) => setFormData({ ...formData, description: e.target.value })}></textarea>

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
