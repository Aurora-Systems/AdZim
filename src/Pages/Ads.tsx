import { FC, useState,useEffect } from "react"
import { listAll } from "firebase/storage"
import { collection,getDocs,where,query } from "firebase/firestore"
import { db } from "../init/firebase.config"

const Ads:FC=()=>{
    const [ads,setAds]=useState([])
    useEffect(()=>{
        const getAds=()=>{
            const q = query(collection(db,"store"))
            getDocs(q).then(res=>{
                res.forEach((doc)=>{
                    console.log(doc.data())
                })
            }).catch(err=>{
                console.log(err)
            })
        }
        getAds()
    })
    return(
        <div>

        </div>
    )
}

export default Ads