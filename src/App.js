import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
function App() {
    const[first, setfirst] = useState("")
    const[last, setlast] = useState("")
    const[username, setusername] =useState("")
    const[email, setemail]=useState("")
    const[password, setpassword]=useState("")
    const[confirmPassword, setConfirm]=useState("")
    const[enter, setEnter]=useState("")
    const[phone, setPhone]=useState("")
    const[home, setHome]=useState("")
    const[Office, setOffice]=useState("")
    const[date, setDate]=useState("")
    const[gendar, setGendar]=useState({})




let selectedone =[
"Country",
"America",
"india",
"France",
"Londan"

]









      return (
    <div className="App">
  <div className="condainer">
    <h1>Register</h1>
    <div className="input">
        
        <div className="a1" id="a1">  
        <i className="fa fa-user"></i>
    <input onChange={(inputproperties)=>{setfirst(inputproperties.target.value)}} id="a" type="text" placeholder="First Name"/>
    <br></br>
    <small>{first.length === 0 ?"please enter name": !isNaN(first) ? "Only alphobets" :""}</small>
    </div>

    <div className="b1" id="b1">
        <i className="fa fa-user"></i>
    <input onChange={(inputproperties)=>{setlast(inputproperties.target.value)}} id="b" type="text" placeholder="Last Name"/>
    <br></br>
    <small>{last.length === 0 ?"please enter lastname" : !isNaN(last)? "Only alphobets" :""}</small>
    </div>

     <div className="c1" id="c1">
        <i className="fa fa-user"></i>
    <input onChange={(inputproperties)=>setusername(inputproperties.target.value)} id="c" type="text" placeholder="Username"/>
    <br></br>
    <small>{username.length === 0 ?"pleace enter user name": !isNaN(username)?"Only alphobets":"" }</small>
    </div>

     <div className="d4" id="d1">
        <i className="fa fa-phone"></i>
    <input onChange={(a)=>setPhone(a.target.value)} id="d" type="number" placeholder="Phone Number"/>
    <br></br>
    <small>{phone.length !==10 ? "pleace enter valied phone number" : ""}</small>
    </div>
    
    <div className="e5" id="e1">
        <i className="fa fa-envelope"></i>
        <input onChange={(inputproperties)=>setemail(inputproperties.target.value)} id="e" type="text" placeholder="Your E-mail adderes"/>
      <br></br>
        <small>{email.length === 0 ? "pleace type your email" : !email.includes("@")? "pleace type @" : !email.includes(".com") ? "pleace type .com" :""}</small>
    </div>
    
     <div className="f6" id="f">
   <i className="fa fa-mars"></i>
    <input id="f" type="gender" placeholder="Gender"/>
</div>

    <div className="g7" id="g">
    <input onChange={(c)=>setDate(c.target.value)} id="g" type="date"/>
    <br></br>
    <small>{date.length ===0? "pleace enter your date of birth" : ""}</small>
    </div>
     
    <div className="h8" id="h11">
    <i className="fa fa-map-marker"></i>
    <select onChange={(dhanush)=>{setEnter(selectedone[dhanush.target.options.selectedIndex])}} id="h12">
<option>Country</option>
<option>America</option>
<option>india</option>
<option>France</option>
<option>Londan</option>

</select>
{enter == "Country" ? <small>select something</small> :<small></small>}
</div>


<div className="i9" id="i1">
<i className="fa fa-user"></i>
<select id="h13">
<option>State</option>

    </select>
</div>

<div className="j10" id="j1">
<i className="fa fa-home"></i>
    <input onChange={(b)=>setHome(b.target.value)} id="j" type="text" placeholder="Home Address"/>
    <br></br>
    <small>{home.length ===0? "pleace enter valied home address" : ""}</small>
</div>
     
    <div className="k11" id="k1">
    <i className="fa fa-address-card"></i>
    <input onChange={(c)=>setOffice(c.target.value)} id="k" type="text" placeholder="Office Address"/>
    <br></br>
    <small>{Office.length ===0 ? "pleace enter valied office address" : ""}</small>
</div>

    <div className="l12" id="l1">
    <i className="fa fa-lock"></i>
    <input onChange={(inputproperties)=>setpassword(inputproperties.target.value)} id="l" type="password" placeholder="Password"/>
    <br></br>
    <small>{password.length !== 8 ?"pleace entar valied password" : ""}</small>
</div>

<div className="n13" id="n1">
    <i className="fa fa-lock"></i>
    <input onChange={(inputproperties)=>setConfirm(inputproperties.target.value)} type="password" id="n" placeholder="Confirm Password"/>
    <br></br>
    <small>{confirmPassword.length !== 8 ?"pleace entar valied password" : confirmPassword!=password ?"incorrect password": ""}</small>
</div>
    
    </div>
    <label id="Gendar">Gendar</label><br></br>
<input onChange={(em)=>{setGendar({male : em.target.checked})}} id="radio1" name="gender" type="radio"/><p id="g1">Male</p>
<input onChange={(em)=>{setGendar({female : em.target.checked})}}id="radio2" name="gender" type="radio"/><p id="g2">Fmale</p>
<small id="hml1">{Object.keys(gendar) == 0? "pleace select any gentar" : ""}</small>
<br></br>
<button id="button" onclick="jayapal()"> Register</button>
</div>
    </div>



  );
}

export default App;
