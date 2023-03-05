import { FC, useState,useEffect } from "react"
import { listAll } from "firebase/storage"
import { collection,getDocs,where,query } from "firebase/firestore"
import { db } from "../init/firebase.config"
import placeholder from "../assets/placeholder.jpg"
import { workPage } from "../Components/cssBundled"

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
        <div className={workPage}>
            <div className="row d-flex justify-content-center ">
            {
                ads.map((item:any,index:any)=>{
                   
                    return(
                        <div key={index} className="col-sm mb-3">
                            <div  className="card" style={{width:"18rem", height:"25rem"}}>
                                <img  data-src={placeholder} src={item.img} loading="lazy" alt="" style={{width:"18rem", height:"10rem"}} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title bold">
                                        {item.name}
                                    </h5>
                                    <p className="card-text">
                                        {item.description}
                                    </p>
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