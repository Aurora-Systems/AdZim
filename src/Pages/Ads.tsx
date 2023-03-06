import { FC, useState,useEffect } from "react"
import { listAll } from "firebase/storage"
import { collection,getDocs,query } from "firebase/firestore"
import { db } from "../init/firebase.config"
import placeholder from "../assets/placeholder.jpg"
import { IonIcon } from "@ionic/react"
import { search } from "ionicons/icons"

const Ads:FC=()=>{
    const [ads,setAds]=useState<any>([])
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
    return(
        
        <div className="page m-5 ">
            <div className="input-group mb-3 ">
                <input className="form-control" placeholder="What are you looking ?"/>
                <button className="btn btnPrimary">
                <IonIcon icon={search} color="#fff" />
              </button>
            </div>
            <div className="row">
            {
                ads.map((item:any,index:any)=>{
                   
                    return(
                        <div key={index} className="col-sm mb-3">
                            <div  className="card" style={{width:"18rem",}}>
                                <img   src={item.img || placeholder} loading="lazy" alt=""  className="card-img-top cardImg" />
                                <div className="card-body">
                                    <h5 className="card-title ">
                                        <b>{item.name}</b>
                                    </h5>
                                    <p className="card-text ">
                                    <b className="text-primary cardText">${item.price}</b>
                                    <br/>
                                        {item.description}
                                    </p>
                                    <button className="btn btnPrimary">Details</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
            </div>
       
    )
}

export default Ads