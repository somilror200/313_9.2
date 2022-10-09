import React, {  useState } from 'react';
import { Link,Navigate } from 'react-router-dom';
import { Header, Form, Grid, Button } from 'semantic-ui-react'
import {collection, getDocs, query, where } from '@firebase/firestore';
import bcrypt from 'bcryptjs'
import { firebase } from '../utils/firebase';




export default function Login(props) {

  const [contact, setContact] = useState({ name: '', email: '', password: '', confirmpassword: '' });
  const [error, setError] = useState("")
  const [state, setState] = useState(false)
  const [redirect, setRedirect] = useState(false)
  const [text, setText] = useState("Login")
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name);
    setContact((prevValue) => {
      return {
        ...prevValue, [name]: value
      }
    });

  }

  const handleSave = async (e) => {
   // console.log(contact); 

    e.preventDefault();

    try {
      setText("Please wait...");
      setState(true);
      const q = await query(collection(firebase, "users"), where("email", "==", contact.email));
      const querySnapshot = await getDocs(q);
      let len = 0;
      let userData={};
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        userData=doc.data();
       // console.log(doc.id, " => ", doc.data());
        len++;
      });
      console.log(userData);
    

      if (len !== 0)
      {
        const result=await bcrypt.compare(contact.password,userData.password);

        if(result)
        {
          setText("Login");
          setState(false);
          setRedirect(true);
          localStorage.setItem("login","1");

        }
        else
        {
         setText("Login");
         setError("Invalid Email/Password");
         setState(false);
        } 
      

    }

      else
       {
        setText("Login");
        setError("Invalid Email/Password");
        setState(false);
       } 

    } catch (e) {
      setText("Login");
      setState(true);
      console.log(e);
    }

  }

  
if(redirect===true)
{
return (
    <Navigate to="/home"/>
);
}
else{
  console.log(props);
  return (
    <>
    
      <div class="ui raised very padded  container segment">
        <Header as='h3' block> Login</Header>
        <p>{localStorage.getItem("message")}</p>
        <Form>
          <Form.Field>
            <label>Your Email</label>
            <input placeholder='email' type="email" name="email" required onChange={handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Your Password</label>
            <input placeholder='password' type="password" name="password" required minLength={6} onChange={handleChange}/>
          </Form.Field>
{error}


          <Grid>
            <Grid.Row>
              <Grid.Column textAlign='right'>
                <Button disabled={state} className='right' type='submit' onClick={handleSave}>{text}</Button>
                <Link to="/Signup">
                  Signup
                </Link>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Form>
      </div>

    </>
  )
  }

}