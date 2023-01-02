export const workPage:string="page container-fluid"
export const divBg=(img:any)=>{
    const bg:{}={
        "backgroundImage":`url(${img})`,
        "backgroundRepeat":"no-repeat",
        "backgroundSize":"cover",
        "backgroundPosition":"center"
    }

    return bg
}