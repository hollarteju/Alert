import React, {useState} from "react";



const SignUp=()=>{

    const [firstNumbers, setFirstNumber]= useState("")
    const [secondNumbers, setSecondNumber]= useState("")
    const [thirdNumbers, setThirdNumber]= useState("")
    
    const [registeration_data, setregisteration_data]= useState([]);
    const [ErrorMessage, setErrorMessage]= useState({
        username: "",
        password: "",
        confirm_password:"",
        phone_number:""

    });
    const [Phone_number, setPhone_number] = useState("")
    const [networkError, setNetworkError]= useState("")
    const [State, SetState] = useState("")
    const [City, SetCity] = useState("")
    const [District, SetDistrict] = useState("")
    
   

    function registeration_form(event){
        setregisteration_data((values)=> ({...values, [event.target.name]: event.target.value, phone_number:phone_number_value}))
     
    }

     function error_notification(username, password, confirm_password, phone_number, state, city, district){
        const Error = {...ErrorMessage}
       
            if(!username || username.length < 3 || username.length > 20){
                Error.username = "invalid Username"
            }
            else{
                Error.username= ""
            }
            if(!password || password.length < 6){
                Error.password = "Invalid password"
            }
            else{
                Error.password = ""
            }
            if(!password || password !== confirm_password){
                Error.confirm_password = "confirm password must be correspond with password"
            }
           
            else{
                Error.confirm_password = ""
            }
            if(!phone_number || phone_number.length < 15){
                Error.phone_number = "Input valid number"
            }
            else{
                Error.phone_number = ""
            }
            if(!state || state === "state"){
                SetState(true)
            }
            else{
                SetState(false)
            }
            if(!city || city === "city"){
                SetCity(true)
            }
            else{
                SetCity(false)
            }
            if(!district || district === "district"){
                SetDistrict(true)
            }
            else{
                SetDistrict(false)
            }
            
           
           
            
        setErrorMessage(Error)
    }

    function error_handling(){
        error_notification(registeration_data.username,
            registeration_data.password,
            registeration_data.confirm_password,registeration_data.state, registeration_data.city, registeration_data.district, Phone_number)
        
    }

    const register=async(e)=>{
        e.preventDefault()
       
        try{
            
            const response = await fetch("https://hollarteju1.pythonanywhere.com/register",{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(registeration_data)
        })
        const data = await response.json()
        if(response.ok){
            window.location.href = "/Alert/"
            setNetworkError("")

          
        }
        else{
          
            setNetworkError("")
        }
        }
        catch(error){
           
            setNetworkError("Please check your internet connection and try again")
    
        }
    };
    
    function inputHandle(event){
        let {value}= event.target
        setPhone_number(value)
     
        value = value.replace(/[^\d()-]/g, "")
        setFirstNumber(value.slice(0,5))
        setSecondNumber(value.slice(5,10))
        setThirdNumber(value.slice(10,15))
        if(value.length === 3 ){
            setFirstNumber(`(${value.slice(0,3)})`)
        }
        if(value.length === 6){
            setSecondNumber(`-${value.slice(5,10)}`)
        }
        if(value.length >6){
            setSecondNumber(value.slice(5,10))
        }
        if(value.length === 11){
            setThirdNumber(`-${value.slice(10,15)}`)
        }
        if(value.length >11){
            setThirdNumber(value.slice(10,15))
            
        }
        
    }
    
    function keyDown(event){
        const {value}= event.target
        if(event.key === "Backspace" && value.length === 5){
            setFirstNumber(firstNumbers.slice(1,-1))
        }
        if(event.key === "Backspace" && value.length === 7){
            setSecondNumber(secondNumbers.slice(0,-1))
            
        }
        if(event.key === "Backspace" && value.length === 12){
            setThirdNumber(thirdNumbers.slice(0,-1))
        }
       
    }
    const phone_number_value =(`${firstNumbers}${secondNumbers}${thirdNumbers}`)

    function reset_all(){
        window.location.href = "/Alert/signup"
    }
    

    return(
        <div class="h-100 sign-up" style={{backgroundColor: "rgba(245, 245, 245"}}>
            
        <div class="container py-5 h-100">
            
            <div class="row d-flex justify-content-center align-items-center h-100">
                
                <div class="col">
                    
                    <div class="card card-registration my-4">
                    
                        <div class="row g-0">
                        
                            <div class="col-xl-6 d-none d-xl-block">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                                alt="Sample photo" class="img-fluid"
                                style={{borderTopLeftRadius: ".25rem", borderBottomLeftRadius: ".25rem"}} />
                            </div>
                            
                            <div class="col-xl-6">
                                
                                <div class="card-body p-md-5 text-black">
                                <form onSubmit={register}>
                                    <h3 class="mb-5 text-uppercase">SignUp your account</h3>
                                    <div class="row">
                                        
                                        <div class="mb-4">
                                
                            
                                            <div class="form-outline">
                                                
                                                <input type="text" name="username" id="form3Example1m" class="form-control form-control-lg" placeholder="Username" onChange={registeration_form }/>
                                                <p class="text-danger">{ErrorMessage.username}</p>
                                            </div>
                                        </div>
                                    <div class="mb-4">
                                        <div class="form-outline">
                                           
                                            <input type="password" name="password" id="form3Example1n" class="form-control form-control-lg" placeholder="Password" onChange={registeration_form } />
                                            <p class="text-danger">{ErrorMessage.password}</p>
                                        </div>
                                    </div>
                                </div>
                                    <div class="form-outline mb-4">
                                        <input type="password" name="confirm_password" id="form3Example97" class="form-control form-control-lg" placeholder="Confirm Password" onChange={registeration_form} />
                                        <p class="text-danger">{ErrorMessage.confirm_password}</p>
                                    </div>
                                    <div class="form-outline mb-4">
                                           
                                        <input type="text" id="form2Example17" class="form-control form-control-lg" name="phone_number" placeholder="PhoneNumber (Option)" onChange={inputHandle} value={phone_number_value}  onKeyDown={keyDown} 
                                            />
                                            <p class="text-danger">{ErrorMessage.phone_number}</p>
                                        
                                    </div>
                                    <select class="select form-control-lg mb-5 " name="state" onChange={registeration_form} style={{borderColor:" rgb(173, 173, 218)"}}>
                                        <option value="1">State</option>
                                    </select>
                                    {State?<span class="text-danger fs-3 p-3">*</span>:""}
                                                                    

                                    <div class="d-flex mb-4" style={{justifyContent:"space-between"}}>

                                        <select class="select form-control-lg " name="city" onChange={registeration_form}  style={{width:"48%", borderColor:" rgb(173, 173, 218)"}}>
                                            <option value="1">City</option>
                                        </select>
                                        {City?<span class="text-danger fs-3 p-3">*</span>:""}
                                    
                                        
                    
                   

                                        <select class="select  form-control-lg" name="district" onChange={registeration_form}  style={{width:"48%", borderColor:" rgb(173, 173, 218)"}}>
                                            <option value="1">District</option>
                                        </select>
                                        {District?<span class="text-danger fs-3 p-3">*</span>:""}
                                        
                    
                                    </div>
                                    
                                    <div class="d-flex justify-content-end pt-3">
                                        <button type="button" class="btn btn-danger btn-lg" onClick={reset_all} >Reset all</button>
                                        <button type="submit" class="btn btn-dark btn-lg ms-2"  onClick={error_handling}>Submit form</button>
                                    </div>
                                    <p class="text-danger">{networkError}</p>
                                    </form>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div> 
                </div> 
            </div> 
        </div> 
    </div>
    )
}

export default SignUp;