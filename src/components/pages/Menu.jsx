import React from "react";

const data = [
  {
    title:"first",
    heading:"First Heading",
    p1:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis reprehenderit, expedita alias exercitationem atque accusantium eum nam ratione in quidem optio commodi consequatur impedit quasi consectetur cupiditate accusamus labore cumque?",
    p2:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis reprehenderit, expedita alias exercitationem atque accusantium eum nam ratione in quidem optio commodi consequatur impedit quasi consectetur cupiditate accusamus labore cumque?"
  },
  {
    title:"second",
    heading:"Second Heading",
    p1:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis reprehenderit, expedita alias exercitationem atque accusantium eum nam ratione in quidem optio commodi consequatur impedit quasi consectetur cupiditate accusamus labore cumque?",
    p2:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis reprehenderit, expedita alias exercitationem atque accusantium eum nam ratione in quidem optio commodi consequatur impedit quasi consectetur cupiditate accusamus labore cumque?"
  },
  {
    title:"third",
    heading:"Third Heading",
    p1:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis reprehenderit, expedita alias exercitationem atque accusantium eum nam ratione in quidem optio commodi consequatur impedit quasi consectetur cupiditate accusamus labore cumque?",
    p2:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis reprehenderit, expedita alias exercitationem atque accusantium eum nam ratione in quidem optio commodi consequatur impedit quasi consectetur cupiditate accusamus labore cumque?"
  },
  {
    title:"forth",
    heading:"Forth Heading",
    p1:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis reprehenderit, expedita alias exercitationem atque accusantium eum nam ratione in quidem optio commodi consequatur impedit quasi consectetur cupiditate accusamus labore cumque?",
    p2:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis reprehenderit, expedita alias exercitationem atque accusantium eum nam ratione in quidem optio commodi consequatur impedit quasi consectetur cupiditate accusamus labore cumque?"
  }
]

export default function Menu() {
  return <div className="container mt-5">
    <div className="text-center">
      <h3 className="typo">Check our tasty <span className="text-warning">Menu</span> </h3>
      <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
    </div>

    <div className="container d-block d-md-flex ">
      {data.map((val, ind)=>{
        return(
        <div className="row">
       <div className="col-12 col-md-3 d-flex flex-column align-content-between">{val.title}</div>
       <div className="col-12 col-md-6"></div>
       <div className="col-12 col-md-3"></div> 
       </div> 
      )})}
     
    </div>
  </div>;
}
