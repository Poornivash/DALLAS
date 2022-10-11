import logo from './logo.svg';
import './App.css';
import {uservalidation} from'./validation'

function App() {
const createUser = async (event)=>{
  event.preventDefault()
  let formData ={
    name:event.target[0].value,
    email: event.target[1].value,
    password: event.target[2].value
  }
 console.log(formData)
 const isValid = await uservalidation.isValid(formData)
 console.log(isValid)
}

  return (
    <div  className="container">
      <div class="main">
        <div class="navbar">
          <div class="icon">
            <h2 class="logo">Dallas</h2>
          </div>
          <div class="menu">
            <ul>
              <li><a href='#'>HOME</a></li>
              <li><a href='#'>ABOUT</a></li>
              <li><a href='#'>SERVICE</a></li>
              <li><a href='#'>DESIGN</a></li>
              <li><a href='#'>CONTACT</a></li>
            </ul>
          </div>
          <div class="search">
            <input class="srch" type="search" name="" placeholder="type to text"></input>
           <a href="#"><button class="btn">Search</button></a>
           </div>
            </div>
<div class="content">
<h1>Login Page <span>Design</span> </h1>
<p class="para">loreum publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available</p>

  <button class="cn"><a href="#">Join Us</a></button>



  <form className="form" onSubmit={createUser}>
  <h2>Login Here</h2>
    <label class="l">Name</label>
     <input type="text" name="Name" placeholder=' Enter your Name' /><br></br>
     <label class="l">Email Id</label>
     <input type="text" name="Email" placeholder=' acbbgt123@.com' /><br></br>
     <label class="l">Password</label>
     <input type="password"  name="Password" placeholder=' password' /><br></br><br></br>
     <button class="btnn"><a href="#">Submit</a></button>
     <br></br>
     <p class="link"> Dont have an account ?<br></br>
     <a href="#">Sign up here</a></p>
     <br></br>
     
     </form>


</div>
        </div>

      
     
     

     
    </div>
  );
}

export default App;
