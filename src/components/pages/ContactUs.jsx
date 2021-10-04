import React,{useRef} from "react";

export default function ContactUs() {
const nameRef = useRef(null)
const emailRef = useRef(null)

const checkValid=()=>{
const emailVal = emailRef.current.value 
const nameVal = nameRef.current.value 
  if(emailVal===""){
    emailRef.current.className = "form-control is-invalid"
  }else{
    emailRef.current.className = "form-control is-valid"

  }
  console.log(nameVal)
  if(nameVal=== ""){
    nameRef.current.className = "form-control is-invalid"
  }else{
    nameRef.current.className = "form-control is-valid"

  }
}

  return <div className="container-fluid form-cont  py-4" 
  style={{background: `linear-gradient(rgba(0,168,255,0.5), rgba(185,0,255,0.5)),  url(${'assets/form.jpeg'})`,
  backgroundPosition: "center",
  backgroundRepeat: " no-repeat",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  height: "100%",
  }} >
    <div className="form-row ">
      <div className="col-10 col-sm-6 col-lg-4 mx-auto">
        <div className="card card-body text-center p-4" style={{backgroundColor:"transparent", background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6))`}}>
          <form action="#" className="needs-validation" noValidate>
          <h1 className="typo my-3 text-light">Contact Us</h1>
              
            <div className="mt-5 mb-3">
            <div className="input-group">
              <span className="input-group-text">Name</span>
            <input type="text" ref={nameRef} className="form-control" required/>
            <div className="invalid-feedback">Enter name</div>
            </div>
            </div>

            <div className="mb-5">
            <div className="input-group">
              <span className="input-group-text">Email Address</span>
            <input type="email" ref={emailRef} className="form-control" required/>
            <div className="invalid-feedback">Enter valid Email address</div>
            </div>
            </div>

            <div className="form-control mb-4">
              <label>Message</label>
            <textarea type="email" className="form-control" rows="3"></textarea>
            </div>

            <div className="btn btn-outline-info btn-lg" style={{borderRadius:"50px"}} onClick={checkValid}>Submit</div>

          </form>
        </div>
      </div>
    </div>

  </div>;
}
