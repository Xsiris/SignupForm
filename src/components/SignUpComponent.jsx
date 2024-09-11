import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleExclamation} from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify';

const SignUpComponent = () => {
    function setCollectionAttrib(collection, attrib){
        let isErrors = false;
        for(let htmlInput of collection) {  
            //reset input errors     
            htmlInput.nextElementSibling.classList.add(attrib);
            htmlInput.parentElement.nextElementSibling.classList.add(attrib);
            htmlInput.oninvalid = (e) =>{
                e.preventDefault();
                const icon = e.target.nextElementSibling;
                const description = e.target.parentElement.nextElementSibling;
                
                console.log("Input name: " + e.target.name);
                if(e.target.name == "email"){
                    //Do nothing
                }else{
                    //Add unresolved form errors
                    icon.classList.remove(attrib);
                    description.classList.remove(attrib);
                    isErrors = true;
                }
            }
            if(htmlInput.name == "email"){
                if(isEmailValid(htmlInput.value)){
                    //reset input errors     
                    htmlInput.nextElementSibling.classList.add(attrib);
                    htmlInput.parentElement.nextElementSibling.classList.add(attrib);
                    //Set the input as valid
                    htmlInput.setCustomValidity("");
                }else{
                    //Sets the input as invalid
                    htmlInput.setCustomValidity("Invalid");
                    //Add unresolved form errors
                    htmlInput.nextElementSibling.classList.remove(attrib);
                    htmlInput.parentElement.nextElementSibling.classList.remove(attrib);
                    isErrors = true;
                }     
            }
        };
        if(!isErrors){
            toast.success("Check you email!");
        }
    }
    function handleValidation (clickEvent){
        const formInputs = document.getElementsByClassName('form-input');
        console.log(formInputs);
        setCollectionAttrib(formInputs, "hidden", clickEvent);
    }
    function isEmailValid(email){
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }

  return (
    <div className="text-center font-Poppins md:flex md:flex-row md:mx-48">
      <div className="md:flex md:flex-col md:items-center md:justify-center md:w-1/2 md:px-6">
        <h1 className="text-3xl text-white text-center font-semibold mb-6 px-6 md:p-0 md:w-full md:font-bold md:text-6xl md:pr-28 md:text-left">Learn to code by watching others</h1>
        <p className="text-signupOffWhite font-medium mb-12 md:pr-12 md:text-left">
            See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
            but understanding how developers think is invaluable.
        </p>
      </div>
      <div className="md:flex md:flex-col md:w-1/2 md:px-6">
        <div className="text-white px-12 py-4 bg-signupBlue rounded-lg mb-6 shadow-custom">
                <b>Try it free 7 days</b> then $20/mo. thereafter
        </div>
        <div className="flex flex-col p-6 bg-white rounded-lg shadow-custom">
            <form id="main-form" className="flex flex-col" onSubmit={(e)=>{e.preventDefault();document.getElementById("main-form").reset();}}>
            <div className="flex flex-col mb-4">
                    <div className="flex flex-col relative">
                            <input className="form-input border-solid border-2 border-signupGrayishBlueBorder rounded-md p-4 text-sm font-semibold text-signupDarkBlue" required name='name' placeholder='First Name'></input>
                            <FontAwesomeIcon className="hidden fa text-signupRed absolute top-1/2 left-full text-2xl -translate-y-1/2 -translate-x-full pr-4" icon={faCircleExclamation} />
                    </div>
                    <i className="hidden text-right text-xs pt-2 text-signupRed">First name cannot be empty</i>
                </div>
                
                <div className="flex flex-col mb-4">
                    <div className="flex flex-col relative">
                            <input className="form-input border-solid border-2 border-signupGrayishBlueBorder rounded-md p-4 text-sm font-semibold text-signupDarkBlue" required name='lastName' placeholder='Last Name'></input>
                            <FontAwesomeIcon className="hidden fa text-signupRed absolute top-1/2 left-full text-2xl -translate-y-1/2 -translate-x-full pr-4" icon={faCircleExclamation} />
                    </div>
                    <i className="hidden text-right text-xs pt-2 text-signupRed">Last name cannot be empty</i>
                </div>

                <div className="flex flex-col mb-4">
                    <div className="flex flex-col relative">
                            <input className="form-input border-solid border-2 border-signupGrayishBlueBorder rounded-md p-4 text-sm font-semibold text-signupDarkBlue" required name='email' placeholder='email@example.com'></input>
                            <FontAwesomeIcon className="hidden fa text-signupRed absolute top-1/2 left-full text-2xl -translate-y-1/2 -translate-x-full pr-4" icon={faCircleExclamation} />
                    </div>
                    <i className="hidden text-right text-xs pt-2 text-signupRed">Looks like this is not an email</i>
                </div>

                <div className="flex flex-col mb-4">
                    <div className="flex flex-col relative">
                            <input className="form-input border-solid border-2 border-signupGrayishBlueBorder rounded-md p-4 text-sm font-semibold text-signupDarkBlue" required name='password' type="password" placeholder='Password'></input>
                            <FontAwesomeIcon className="hidden fa text-signupRed absolute top-1/2 left-full text-2xl -translate-y-1/2 -translate-x-full pr-4" icon={faCircleExclamation} />
                    </div>
                    <i className="hidden text-right text-xs pt-2 text-signupRed">Password cannot be empty</i>
                </div>
                
                <button type='submit' onClick={handleValidation} className="p-4 text-white bg-signupGreen rounded-md tracking-wide text-md font-medium shadow-claim mb-4 hover:bg-signupGreenHover">CLAIM YOUR FREE TRIAL</button>
                <p className="text-signupGrayishBlue text-xs px-4">
                    By clicking the button, you are agreeing to our <b className="text-signupOrange"><a href="#">Terms and Services</a></b>
                </p>
            </form>
        </div>
      </div>
      
    </div>
  )
}

export default SignUpComponent
