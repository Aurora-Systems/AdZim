import { FC, useState,useEffect } from "react"
import { collection,getDocs,query } from "firebase/firestore"
import { db } from "../init/firebase.config"
import placeholder from "../assets/placeholder.jpg"
import { IonIcon } from "@ionic/react"
import { search } from "ionicons/icons"


const Ads:FC=()=>{
    const [ads,setAds]=useState<any>([])
    const [view,setView]=useState<boolean>(true)
    const [item,setItem]=useState<any>({
        name: "",
    price: 0,
    units: 0,
    condition: "",
    category: "",
    phone: "",
    description: "",
    img:placeholder
    })
    const getAds=async()=>{
        const q = query(collection(db, "store"));
        getDocs(q).then(res=>{
            const data = res.docs.map((doc)=>({...doc.data()}))
            setAds(data)
        })
    }
    useEffect(()=>{
       
        getAds()
},[])

const Details=(data:any,show:boolean)=>{
    setItem(data)
    setView(show)
}

    return(
        
        <div className="page m-5 ">
            <div className="input-group mb-3 ">
                <input className="form-control" placeholder="What are you looking ?"/>
                <button className="btn btnPrimary">
                <IonIcon icon={search} color="#fff" />
              </button>
            </div>
            <div className="d-flex flex-row flex-wrap justify-content-center">
            {
                ads.map((item:any,index:any)=>{
                   
                    return(
                        <div key={index} className="m-3">
                            <div  className="card shadow-lg cardEffects" style={{width:"18rem",}}>
                                <img   src={item.img || placeholder} loading="lazy" alt=""  className="card-img-top cardImg" />
                                <div className="card-body">
                                    <h5 className="card-title ">
                                        <b>{item.name}</b>
                                    </h5>
                                    <p className="card-text cardText ">
                                    <b className="text-primary ">${item.price}</b>
                                    <br/>
                                        {item.description}
                                    </p>
                                    <button className="btn btnPrimary" onClick={()=>Details(item,false)}>Details</button>
                                </div>
                            </div>
                           
                        </div>
                    )
                })
            }
             <div className="shadow-lg col-sm details" hidden={view}>
                            <div className="row container bg-light p-1 rounded ">
            <div className="col-sm ">
             <img className="img-fluid rounded" src={item.img} />
            </div>
            <div className="col-sm ">
            
              <div className="pt-2"><h1><b>{item.name}</b></h1></div>
                  <div className="d-flex justify-content-between">
                    <p>Price</p>
                    <p className="text-primary"><b>${item.price}</b></p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>Units Available</p>
                    <p className="text-primary"><b>{item.units}</b></p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>Condition</p>
                    <p className="text-primary"><b>{item.condition}</b></p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>Category</p>
                    <p className="text-primary"><b>{item.category}</b></p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>Contact</p>
                    <p className="text-primary"><b>{item.phone}</b></p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>{item.description}</p>
                  </div>
                  
                  <div>
                    <button className="btn btnPrimary" onClick={()=>setView(true)}>Close</button>
                  </div>
             
            </div>
        </div>
               </div>
            </div>
            </div>
       
    )
}

export default Ads