import { FC, useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import { db, storage } from "../init/firebase.config";
import { addDoc, collection } from "firebase/firestore";
import  {ref,uploadBytes} from "firebase/storage"
import {v4} from "uuid"
import loading from "../assets/loading.png"
import placeholder from "../assets/placeholder.jpg"


interface btnState{
  disabled:boolean,
  text:any
}

const PreviewAd:FC=()=>{
    const [buttonState,setButtonState] = useState<btnState>({
      disabled:false,
      text:"Post Ad"
    })
    const [FormImage,setFormImage] =useState("")
    const formData =useLocation().state.formData;
    
    const FormSubmission=async(e:any)=>{
     
      e.preventDefault();
      setButtonState({...buttonState, text:<div className="spinner-grow" role="status">
      <span className="sr-only">Loading...</span>
    </div>})
      const imageRef = ref(storage,`adimage/${v4()}`)
      uploadBytes(imageRef,formData.img).then(res=>{
        console.log(res.metadata)
        addDoc(collection(db,"store"),{...formData, img:res.metadata.fullPath}).then(res=>{
          setButtonState({...buttonState,disabled:true,text:"Posted! 😉" })
        }).catch(err=>{
          setButtonState({...buttonState,disabled:false,text:"Try again 😢" })
        })
      })
    
    }

    useEffect(()=>{
      const selectNpreview = (e:any) => {
       
          const objectUrl = URL.createObjectURL(e)
          setFormImage(objectUrl)
        }
      
      selectNpreview(formData.img)
    },[])
    return(
        <div className="container" >
          <div>
            <h1 className="display-1 gradText"><b>Preview Ad</b></h1>
          </div>
          <div className="row container bg-light p-1 rounded ">
            <div className="col-sm ">
             <img className="img-fluid rounded" src={FormImage} />
            </div>
            <div className="col-sm ">
              <form onSubmit={(e)=>FormSubmission(e)}>
              <div className="pt-2"><h1><b>{formData.name}</b></h1></div>
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
                    <button className="btn btnPrimary" disabled={buttonState.disabled}>{buttonState.text}</button>
                  </div>
              </form>    
            </div>
        </div>
        </div>
    )
}
    
   
export default PreviewAd;