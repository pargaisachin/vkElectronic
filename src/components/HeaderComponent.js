import React,{useState} from 'react'
import { Link } from "react-router-dom"


export default function HeaderComponent() {

    const [loginbtn,setLoginbtn]=useState("Login")    
    
    return(

        <div className="flex justify-between bg-pink-100 shadow-lg mb-4">
            <div className="w-56">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsu-C8khhxq3rfL3cUrV1bjL9fc3lBcCtrU0n8xnbYmkI2r_ccOVPhbConC9jrW90nZZs&usqp=CAU"></img>
            </div>
            <div className="nav-items ">
                
                <ul className="flex p-4 m-4 mt-12 justify-around">

    

    
                    <button className="loginLogoutbtn" onClick={()=>{
                        loginbtn==="Login"?setLoginbtn("Logout"):setLoginbtn("Login")
                    }}>{loginbtn}
                    </button>
    
    
                </ul>
    
    
            </div>
        </div>
        )
    
}
