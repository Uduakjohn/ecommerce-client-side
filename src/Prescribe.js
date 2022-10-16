import React from 'react'
import { OutlinedInput,Button,IconButton} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link, useNavigate } from 'react-router-dom';
import "./Prescribe.css";


function Prescribe() {
  return (
    <div className='pre'>
      <h1>Send us your prescription</h1>
    <p>07032277786</p>
    <p>idorenyin.u.john@gmail.com</p>
    <form action="mailto:idorenyin.u.john@gmail.com" method="post" enctype="text/plain">
      <label>Your Name:</label>
      <input placeholder='Enter your name' type="text"className='ne'/><br />
      <label>Your Email:</label>
      <input placeholder='Enter your email' type="email" className='ne'/><br />
      <label>Your message</label>
      <textarea className='in' name="your message" rows="10" cols="30"></textarea>
      <Button placeholder='send' variant="contained" component="label" type='submit'>
      Send
      <input className='inpt' type="submit" placeholder='send' value=""/>
      </Button>
      

    </form>
    </div>

   
  )
}

export default Prescribe
