import React, { Component } from 'react';
import {  Form, Button, Grid } from 'semantic-ui-react'
import { firebase, storage } from '../utils/firebase';
import {  addDoc, collection } from '@firebase/firestore';
import { ref, uploadBytes } from 'firebase/storage'
import { v4 as uuid } from 'uuid';
class Article extends Component {
  imageAsFile = "";
  filename = "";
  unique_id="";
  posts = collection(firebase, "posts");

  handleFireBaseUpload = async (e) => {
    e.preventDefault()
    //  const storage = firebase.storage();
    console.log('start of upload')
    // async magic goes here...
    if (this.imageAsFile === '') {
      console.error(`not an image, the image file is a ${typeof (this.imageAsFile)}`)
    }
     this.unique_id = uuid();
    this.filename = this.unique_id + ".jpg";
    const imageref = ref(storage, `/images/${this.unique_id}.jpg`)
    await uploadBytes(imageref, this.imageAsFile.name).then((result) => {
      //console.log("Uploaded",imageref,result,imageref.getDownloadURL());

    });

    //const uploadTask = storage.ref(`/images/${this.imageAsFile.name}`).put(this.imageAsFile)
    //initiates the firebase side uploading 


  }

  handleSave = async (e) => {
    e.preventDefault();
    if (this.filename == "") {
      this.setState({ message: "Please upload a file, first" })
      return;
    }
    //console.log("data", this.state.tags,this.state.description,this.state.title);
    let newpost = {};
    newpost.id=this.unique_id;
    newpost.title = this.state.title;
    newpost.type = 'Article';
    newpost.description = this.state.description;
    newpost.tags = this.state.tags;
    newpost.abstract = this.state.abstract;
    newpost.image = this.filename;

    await addDoc(this.posts, newpost);
    localStorage.setItem("message", "User Created Successfully");
    //setRedirect(true);
    //setText("Create Account");
  }
  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState((prevValue) => {
      return {
        ...prevValue, [name]: value
      }
    });

  }
  constructor(props) {
    super(props);
    this.state = { message: "", abstract: '', text: 'Create Post', type: 'question', title: '', description: '', tags: '' }

  }
  handleImageAsFile = (e) => {
    const image = e.target.files[0]
    //this.setState(imageFile => (image))
    this.imageAsFile = image;
  }
  render() {
    let jsxElement=<p>{this.state.message}</p>;
    return (
      <>
 {jsxElement}
        <Form>
        <Form.Group widths='equal'>

          <input
            type="file" fluid 
            onChange={this.handleImageAsFile}
          />
          <button onClick={this.handleFireBaseUpload}>Upload</button>

</Form.Group>
          <Form.Field>
            <label>Title</label>
            <input required onChange={this.handleChange} name='title' placeholder='title' />
          </Form.Field>

          <Form.Field>
            <label>Abstract</label>
            <textarea required onChange={this.handleChange} name='abstract'></textarea>
          </Form.Field>

          <Form.Field>
            <label>Article Text</label>
            <textarea required onChange={this.handleChange} name='description'></textarea>
          </Form.Field>
          <Form.Field>
            <label>Tags</label>
            <input placeholder='tags' required onChange={this.handleChange} name='tags' />
          </Form.Field>

          <Grid>
            <Grid.Row>
              <Grid.Column textAlign='right'>
                <Button className='right' type='button' onClick={this.handleSave} >{this.state.text}</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>

        </Form>


      </>)
  }
}



export default Article;