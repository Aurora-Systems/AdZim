import { FC } from "react";
import { useLocation } from "react-router-dom";

const PreviewAd:FC=()=>{
    const formData =useLocation().state;

    return(
        <div className="col-sm " >
          <div>
            <h1 className="display-1 gradText"><b>Preview Ad</b></h1>
          </div>
          <div className="row container bg-light p-1 rounded ">
            <div className="col-sm ">
             <img className="img-fluid rounded" src={formData.formImage} />
            </div>
            <div className="col-sm ">
              <div>
              <div><b>{formData.name}</b></div>
                  <div className="d-flex justify-content-between">
                    <p>Price</p>
                    <p className="text-primary"><b>${formData.price}</b></p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>Units Available</p>
                    <p className="text-primary"><b>{formData.units}</b></p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>Condition</p>
                    <p className="text-primary"><b>{formData.condition}</b></p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>Category</p>
                    <p className="text-primary"><b>{formData.category}</b></p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>Contact</p>
                    <p className="text-primary"><b>{formData.phone}</b></p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>{formData.description}</p>
                  </div>
                  <div>
                    <button className="btn btnPrimary">Post Ad</button>
                  </div>
              </div>    
            </div>
        </div>
        </div>
    )
}
    
   
export default PreviewAd;