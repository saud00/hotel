import React,{useRef, useEffect} from "react";

const data = [
  {
    id:"0",
    title:"first",
    img:"assets/menu/specials-1.jpeg",
    heading:"First Heading",
    p1:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis reprehenderit, expedita alias exercitationem atque accusantium eum nam ratione in quidem optio commodi consequatur impedit quasi consectetur cupiditate accusamus labore cumque?",
    p2:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis reprehenderit, expedita alias exercitationem atque accusantium eum nam ratione in quidem optio commodi consequatur impedit quasi consectetur cupiditate accusamus labore cumque?"
  },
  {
    id:"1",
    title:"second",
    img:"assets/menu/specials-2.jpeg",
    heading:"Second Heading",
    p1:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis reprehenderit, expedita alias exercitationem atque accusantium eum nam ratione in quidem optio commodi consequatur impedit quasi consectetur cupiditate accusamus labore cumque?",
    p2:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis reprehenderit, expedita alias exercitationem atque accusantium eum nam ratione in quidem optio commodi consequatur impedit quasi consectetur cupiditate accusamus labore cumque?"
  },
  {
    id:"2",
    title:"third",
    img:"assets/menu/specials-3.jpeg",
    heading:"Third Heading",
    p1:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis reprehenderit, expedita alias exercitationem atque accusantium eum nam ratione in quidem optio commodi consequatur impedit quasi consectetur cupiditate accusamus labore cumque?",
    p2:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis reprehenderit, expedita alias exercitationem atque accusantium eum nam ratione in quidem optio commodi consequatur impedit quasi consectetur cupiditate accusamus labore cumque?"
  },
  {
    id:"3",
    title:"forth",
    img:"assets/menu/specials-4.jpeg",
    heading:"Forth Heading",
    p1:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis reprehenderit, expedita alias exercitationem atque accusantium eum nam ratione in quidem optio commodi consequatur impedit quasi consectetur cupiditate accusamus labore cumque?",
    p2:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis reprehenderit, expedita alias exercitationem atque accusantium eum nam ratione in quidem optio commodi consequatur impedit quasi consectetur cupiditate accusamus labore cumque?"
  }
]

export default function Menu() {
  const [select, setSelect]= React.useState(0),
  prevRef = useRef(null), first = useRef(null),

   clickTitle=(e,ind)=>{
   prevRef.current.style.color = "inherit"
    e.target.style.color = "coral"
    prevRef.current = e.target
    setSelect(ind)
  }

  useEffect(() => {
    prevRef.current = first.current;
  }, [])

  return <div className="container ">
    <div className="text-center pt-5 pb-3 bg-dark">
      <h2 className="typo text-light">Check our tasty <span className="text-warning">Menu</span> </h2>
    </div>

    <div className="container d-block my-5 d-md-flex w-100">
      <div className="row w-100">

        <div className="col-12 col-md-3 d-flex flex-column justify-content-around parent ">
      {data.map((val, ind)=>{
        return(
         <div ref={first} onClick={(e)=>{clickTitle(e,ind)}} style={{cursor:"pointer"}}>
          {val.title}
         </div>
       )
       })}
       </div>

      <div className="col-12 col-md-6 d-block ">
        {data.map((val, ind)=>{
          if(ind===select)
          return(
            <div style={{textAlign:"justify"}} >
            <h3 className="typo lh-5 my-4" >{val.heading}</h3>
            <div className="lead">{val.p1}</div>
            <div className="lead">{val.p2}</div>
            </div>
            )
        })}
      </div>

      <div className="col-12 col-md-3 text-center">
      {data.map((val, ind)=>{
          if(ind===select)
          return(
            <div className="w-100 h-100">
            <img src={`${val.img}`} height="80%" width="100%" alt="img" />
            </div>
            )
        })}</div> 
       </div> 
     
    </div>
  </div>;
}
