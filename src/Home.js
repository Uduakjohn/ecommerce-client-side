import React from 'react'
  import "./Home.css";
  import { OutlinedInput,Button,IconButton} from '@mui/material';
  import Product from "./Product"
  import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link, useNavigate } from 'react-router-dom';
import {useState, useEffect} from "react";
import axios from "axios"
import { useSignupUserMutation } from './services/appApi';
// import axios from "axios";


function Home() {
  
// // image upload state
const [image, setImage] = useState("")
const [uploadImg, setUploadingImg] = useState(false)
const [imagePreview, setImagePreview] = useState(null);

//signupuser
const [email, setEmail] = useState("");
const [name, setName] = useState("");
const [listOfUsers, setListOfUsers] = useState([]);

const [SignupUser, {isLoading, error}] = useSignupUserMutation();
const navigate = useNavigate()

function validateImg (e) {
  const file = e.target.files[0];
  if (file.size >= 133625461) {
    return alert ("max file size is 2mb");
  }else{
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  }
}

async function uploadImage(){
const data = new FormData();
data.append("file", image);
data.append("upload_preset", "tjkdpint");
try{
  setUploadingImg(true);
  let res = await fetch('https://api.cloudinary.com/v1_1/do6gdbg3h/image/upload',{
  method: 'post',
  body:data,
})
const urlData = await res.json();
setUploadingImg(false);
return urlData.url
}catch (error){
  setUploadingImg(false);
  console.log(error);
}

 }

async function handlePic(e){
  e.preventDefault();
  if (!image) return alert ("please upload a picture")
  const url = await uploadImage(image);
  console.log(url);

}

//   //signup user to newsletter
//   SignupUser({picture:url}).then(({data}) =>{
//     if(data) {
//       console.log(data);
//       navigate("/Checkout");
//     }
//     else{
//       console.log("server is down")
//     }
//   });
//  }

 useEffect(() => {
   axios.get("http://localhost:3001/getUsers/").then((response) => {
     setListOfUsers (response.data)
   })
   }, [])

const createUser = () => {
  axios.post ("http://localhost:3001/createUsers/", {
    name:name,
    email:email,
  })
  .then((response) => {
    setListOfUsers([...listOfUsers, {name:name, email:email}]);
  })
}




return (
    <div className='home'>
    <div>
    <div className='slides slowFade'>
        <div className='slide'>
        <img src='https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJ1Z3N8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
        className='slide_pic1' alt='yop'/>
        </div>

        <div className='slide'>
        <img src='https://images.unsplash.com/photo-1598300188480-626f2f79ab8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGhhcm1hY2V1dGljYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
        className='slide_pic2' alt=''/>
        </div>

        <div className='slide'>
            <img src='https://media.istockphoto.com/photos/woman-buying-medicines-at-the-pharmacy-with-the-assistance-of-the-picture-id1412567377?b=1&k=20&m=1412567377&s=170667a&w=0&h=pAn8J0N7ZKvSmXTwC063Ny5Kxma1KNN3E2xtccVFG4E='
            className='slide_pic3' alt=''/>
        </div>
        </div>
        <div className='cat'>
        <Link to={"/Items"} color="white">
    <h2 className="pricing-column col-lg-4 col-md-6">Drugs</h2>
    </Link>
    <h2 className="pricing-column col-lg-4 col-md-6">Shop Categories</h2>
    <h2 className='pricing-column col-lg-4 col-md-6'>labouratory</h2>
</div>
    <div className='home_row'>
        <div className="category col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-6 col mb-3">
            <img src='https://images.unsplash.com/photo-1631549916768-4119b2e5f926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZHJ1Z3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60' 
            className='category_img' alt=''/>
      
            <img src='https://images.unsplash.com/photo-1582560475093-ba66accbc424?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bGFib3JhdG9yeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
            className='category_img' alt=''/>
        
        </div>

    </div>
    <section className='testimonials'>
        <div>
            <h1>Trusted by the best</h1>
        </div>
    </section>

    <div className='home_row'>
        <Product
        id = "5384"
        title = "WellWoman"
        price = {29.9}
        image = "images/wellwoman.jpg"
        rating={5}
         />
        <Product
        id = "5384"
        title = "TCP"
        price = {29.9}
        image = "images/TCP.jpg"
        rating={5}
        />
         <Product
         id = {67833}
         title = "Astyfer"
         price = {50.68}
         image = "images/Astyfer.jpg"
         rating={4}
         
         />
        <Product
        id = "5384"
        title = "Prostate Defence"
        price = {29.9}
        image = "images/Prostate Defence.jpg"
        rating={5}
        />

        <Product
        id = "5384"
        title = "Emzor syrup"
        price = {29.9}
        image = "images/Emzor syrup.jpg"
        rating={5}
        />
        <div className='arrow'>
        <Link to={"/Items"}>
        <ArrowForwardIosIcon/>
        </Link>
</div>
         </div>

<section className='prescribe'>
    <div>
        <h1 className='pre-write'>Upload Your Prescriptions</h1>
        <div className='pre-write'>
            <h3>Now you can upload your prescription to Perfect Pills Pharmarcy<br/>
             and we deliver your medicine to your doorstep.<br/>
              Click on upload prescription, input your email and click Send.</h3>
        </div>
        <h2 >Signup to our newsletter</h2>
        <input className='pre-name' type="text" placeholder= "Enter your Name" onChange={ (e) =>setName(e.target.value)} value={name}/>
        <OutlinedInput className='pre-input' type='text' placeholder='Enter your email' onChange={ (e) => setEmail(e.target.value)} value = {email}/>
        <button  className='pb' type='submit' onClick={createUser}>Signup</button>
        <div className='pre-button'>
       
<IconButton color="primary" aria-label="upload picture" component="label">
  <input hidden accept="image/*" type="file" />

</IconButton>

        </div>
    </div>
</section>

<section class="white-section" id="pricing">


<div class="row">

  <div class="pricing-column col-lg-4 col-md-6">
    <div class="card">
      <div class="card-header">
      
        <h3>Contact Us</h3>
      
      </div>
      <div class="card-body">
    
        <p>Head office: 155, Ikot   Ekpene Road, Uyo</p>
        <p>Phone number: +2347032277786</p>
        <p>Talk to us at perfectpill@gmail.com</p>
        <Link to="/Prescribe"><button class="btn btn-lg btn-block btn-outline-dark" type="button">contact us</button></Link>
      </div>
    </div>
    </div>

      <div class="pricing-column col-lg-4 col-md-6">
        <div class="card">
          <div class="card-header">
            <h3>Customer Service</h3>
          </div>
          <div class="card-body">
            <p>we ensure that our customers are served with the most gratifying shopping experience</p>
            <p>as well as a courteous and professional service round the clock</p>
            <p>We are therefore keen to hear from you towards delivering beyond and above your expectations of us.</p>
            <Link to="/Precribe"><button class="btn btn-lg btn-block btn-dark" type="button">Contact Us</button></Link>
          </div>
        </div>
      </div>
      <div class="pricing-column col-lg-4">
        <div class="card">
          <div class="card-header">
            <h3>About Us</h3>
          </div>
          <div class="card-body">
            <p>We are Nigeria’s leading health and labouratory pharmacy</p>
            <p> The brand started in 2022, Perfect pills offerings has grown in terms of expertise and merchandize</p>
            <p> our purpose is to help our customers live healthy, look beautiful and feel good. </p>
            <p>In spite of all situations, we want our customers to Live It Up.</p>
            <Link to="/Prescribe"><button class="btn btn-lg btn-block btn-dark" type="button">contact us</button></Link>

          </div>
        </div>
      </div>
      
    </div>

</section>

    </div>
    </div>
  )
}

export default Home
