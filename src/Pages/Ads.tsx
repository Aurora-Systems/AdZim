import { FC, useState,useEffect } from "react"
import { collection,getDocs,query, where } from "firebase/firestore"
import { db } from "../init/firebase.config"
import placeholder from "../assets/placeholder.jpg"
import { IonIcon } from "@ionic/react"
import { search } from "ionicons/icons"
import { useLocation } from "react-router-dom"


const Ads:FC=()=>{
    const previousState = useLocation()
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
    const [searchInfo,setSearchInfo]= useState<string>("");
    const storeDb = collection(db,"store")
    const getAds=async()=>{
        const q = query(storeDb);
        getDocs(q).then(res=>{
            const data = res.docs.map((doc)=>({...doc.data()}))
            setAds(data)
        })
    }
   

const Details=(data:any,show:boolean)=>{
    setItem(data)
    setView(show)
}

const RunSearch=(e?:any)=>{
  e?e.preventDefault():console.log("no event")
  console.log(searchInfo)
  const searchQuery = query(storeDb, where("name" ,">=", searchInfo))
  getDocs(searchQuery).then(res=>{
   
    const data = res.docs.map((doc)=>({...doc.data()}))
    setAds(data)
  }).catch(err=>{
    setAds([])
  })
}

useEffect(()=>{ 
  const RunBefore=(parameter:string, value:string, symbol:any)=>{
    const searchSent = query(storeDb, where(parameter, symbol, value))
    getDocs(searchSent).then(res=>{
      console.log(res)
     const data = res.docs.map((doc)=>({...doc.data()}))
     setAds(data)
   }).catch(err=>{
     setAds([])
   })
  }
  if(previousState.state.name){
     RunBefore("name",previousState.state.name,">=")
  }else if(previousState.state.category){
    RunBefore("category",previousState.state.category,"==")
  }else{
    getAds()
  }

},[previousState]) 

  const Nothing=()=>{
    setTimeout(
      ()=>{
    return(
      <h1>Nothing Found</h1>
    )},3000)
  }

    return(
        
        <div className="page m-5 ">
           <form onSubmit={(e)=>RunSearch(e)}>
            <div className="input-group mb-3 ">
                <input className="form-control" placeholder="What are you looking ?" value={searchInfo}  onChange={(e)=>setSearchInfo(e.target.value)}/>
                <button type="submit" className="btn btnPrimary">
                <IonIcon icon={search} color="#fff" />
              </button>
            </div>
             </form>  
            <div className="d-flex flex-row flex-wrap justify-content-center">
              {ads.length==0?Nothing():
            

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