import React, {  useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Header, Form, Grid, Button } from 'semantic-ui-react'
import { addDoc, collection, getDocs, query, where } from '@firebase/firestore';
import bcrypt from 'bcryptjs'
import { firebase } from '../utils/firebase';
export default function Signup(props) {


  const [contact, setContact] = useState({ name: '', email: '', password: '', confirmpassword: '' });
  const [text, setText] = useState("Create Account")
  const [error, setError] = useState("")
  const [redirect, setRedirect] = useState(false)
  const users = collection(firebase, "users");
  
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
    //console.log(contact); 
setText("Please wait...");

    try {
      const q = await query(collection(firebase, "users"), where("email", "==", contact.email));
      const querySnapshot = await getDocs(q);
      let len = 0;
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        len++;
      });
      //console.log(len);
      contact.password=bcrypt.hashSync(contact.password,10);
      contact.confirmpassword=contact.password;

      if (len === 0)
      {
         await addDoc(users, contact);
         localStorage.setItem("message","User Created Successfully");
         setRedirect(true);
         setText("Create Account");

      }

      else
      {
        setError("Email already registerd");
        setText("Create Account");
      }

    } catch (e) {
      console.log(e);
    }

  }

  if(redirect===true)
{
return (
    <Navigate to="/login"/>
);
}
else{
  return (
    <>
      <div class="ui raised very padded  container segment">
        <Header as='h3' block> Signup</Header>
        <Form>
          <Form.Field>
            <label>Name *</label>
            <input placeholder='Name' required onChange={handleChange} name="name" />
          </Form.Field>
          <Form.Field>
            <label>Email *</label>
            <input placeholder='Email' required type="email" onChange={handleChange} name="email" />
          </Form.Field>

          <Form.Field>
            <label>Password *</label>
            <input type="password" required placeholder='password' minLength={6} onChange={handleChange} name="password" />
          </Form.Field>
          <Form.Field>
            <label>Confirm Password *</label>
            <input type="password" required placeholder='confirm password' minLength={6} onChange={handleChange} name="confirmpassword" />
          </Form.Field>

          {error}
          <Grid>
            <Grid.Row>
              <Grid.Column textAlign='right'>
                <Button className='right' type='submit' onClick={handleSave}>{text}</Button>

              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Form>
      </div>

    </>
  )

  }
}