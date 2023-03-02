import { FC } from "react";
import { useLocation } from "react-router-dom";
import { db } from "../init/firebase.config";
import { addDoc, collection } from "firebase/firestore";
const PreviewAd:FC=()=>{
    const formData =useLocation().state.formData;
    
    const FormSubmission=async(e:any)=>{
      e.preventDefault();
      addDoc(collection(db,"store"),formData).then(res=>{
        console.log(res.id)
      }).catch(err=>{
        console.log(err)
      })
    }
    return(
        <div className="container" >
          <div>
            <h1 className="display-1 gradText"><b>Preview Ad</b></h1>
          </div>
          <div className="row container bg-light p-1 rounded ">
            <div className="col-sm ">
             <img className="img-fluid rounded" src={formData.img} />
            </div>
            <div className="col-sm ">
              <form onSubmit={(e)=>FormSubmission(e)}>
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
                  <div className="d-flex justify-content-between">
                    <div className="mb-2">
                      <input type="checkbox" required/>
                    <span> You agree to our <a href="">terms and conditions</a></span>
                    </div>
                    
                  </div>
                  <div>
                    <button className="btn btnPrimary">Post Ad</button>
                  </div>
              </form>    
            </div>
        </div>
        </div>
    )
}
    
   
export default PreviewAd;