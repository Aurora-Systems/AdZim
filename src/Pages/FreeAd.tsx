import { divBg, workPage } from "../Components/cssBundled";
import { IonIcon } from "@ionic/react";
import { cashOutline, calculatorOutline, shirtOutline, starOutline, fileTrayStackedOutline, callOutline, mailOutline, imageOutline } from "ionicons/icons";
import { useState } from "react";
import { Card } from "react-bootstrap";
import placeholder from "../assets/placeholder.jpg"

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

  const [formImage,setFormImage] = useState<any>(placeholder);
  const bg: any = divBg("https://ngratesc.sirv.com/Aurora/freeAd.jpg");

  

  const submitForm=(e:any)=>{
    e.preventDefault();
    
  }

  const selectNpreview=(e:any)=>{
    if(!e.target.files || e.target.files.length === 0){
      setFormImage(placeholder)
    }else{
      const objectUrl = URL.createObjectURL(e.target.files[0])
      console.log(objectUrl)
      setFormImage(objectUrl)
    }
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
                    onChange={(e)=>setFormData({...formData, name:e.target.value})}
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
                    onChange={(e:any)=>{selectNpreview(e)}}
                  />
                  <button type="button" className="btn btnPrimary"><IonIcon icon={imageOutline}/></button>
                    </div>
                  
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <div className="input-group mb-3">
                    <input
                      type="number"
                      className="form-control "
                      placeholder="Price per unit"
                      onChange={(e)=>setFormData({...formData, price:e.target.value})}
                    />
                    <button className="btn btnPrimary">
                      <IonIcon icon={cashOutline} color="#fff" />
                    </button>
                  </div>
                </div>
                <div className="col-sm">
                    <div className="input-group mb-3">
                        <input type="number"  className="form-control" placeholder="Total Units Available?" onChange={(e)=>setFormData({...formData, units:e.target.value})}/>
                        <button type="button" className="btn btnPrimary"><IonIcon icon={calculatorOutline}/></button>
                    </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                    <div className="input-group mb-3">
                        <select className="form-control" onChange={(e)=>setFormData({...formData, condition:e.target.value})}>
                            <option disabled>Condition</option>
                            <option value="Brand New">Brand new</option>
                            <option value="Used - Good Condition">Used - good condtion</option>
                            <option value="Used Functioning Okay">Used - functioning okay</option>
                            <option value="Old - Functioning">Old - functioning</option>
                            <option value="Not working">Not working</option>
                        </select>
                        <button type="button" className="btn btnPrimary">
                            <IonIcon icon={starOutline}/>
                        </button>
                    </div>
                </div>
                <div className="col-sm">
                    <div className="input-group mb-3">
                        <select className="form-control" onChange={(e)=>setFormData({...formData, category:e.target.value})}>
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
                        <input type="tel" className="form-control" placeholder="Whatsapp / Phone Number" onChange={(e)=>setFormData({...formData, phone:e.target.value})}/>
                        <button type="button" className="btn btnPrimary" ><IonIcon icon={callOutline}/></button>
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
                <textarea className="form-control" placeholder="Description" onChange={(e)=>setFormData({...formData, description:e.target.value})}></textarea>

                </div>
              </div>
              <button type="submit" className="btn btnPrimary">Lets Go!</button>
            </form>
          </div>
        </div>
        <div className="col-sm">
          <div>
                      <h1 className="display-1 gradText"><b>Preview Ad</b></h1>

          </div>
          <div>
            <Card style={{width:'18rem'}}>
              <Card.Img variant="top" src={formImage}/>
              <Card.Body>
                <Card.Title><b>{formData.name}</b></Card.Title>
                <Card.Text>
                  <div className="d-flex justify-content-between">
                    <p>Price</p>
                    <p className="text-primary"><b>${formData.price}</b></p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>Condition</p>
                    <p className="text-primary">{formData.condition}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>{formData.description}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>Contact</p>
                    <p className="text-primary"><b>{formData.phone}</b></p>
                  </div>
                </Card.Text>
                <button className="btn btnPrimary">Post Ad</button>
                
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeAd;
