import React from 'react';
import { Button, Dropdown, Form, Header, Card, Icon } from 'semantic-ui-react'
import { firebase } from '../utils/firebase';
import { deleteDoc, collection, getDocs, query, where } from '@firebase/firestore';
import { Navigate } from 'react-router-dom';
class ListQuestion extends React.Component {

  posts = collection(firebase, "posts");

  allData = [];
  searchString = "";
  options = "Title";
  constructor(props) {
    super(props);
    this.state = { posts: [], message: "" };

  }
  handleChange = (event) => {
    this.searchString = event.target.value;

  }
  async componentDidMount() {
    const q = await query(collection(firebase, "posts"), where("type", "==", "Question"));
    const querySnapshot = await getDocs(q);
    let len = 0;
    let postData = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      postData.push(doc.data());
      // console.log(doc.id, " => ", doc.data());
      len++;
    });
    //console.log(postData);
    this.allData = postData;
    this.setState({ posts: postData });
  }
  deleteData=async (id)=>{
    const q = await query(collection(firebase, "posts"), where("id", "==", id));
    const querySnapshot = await getDocs(q);
    deleteDoc()
  }
  searchHandler = () => {
    console.log(this.searchString,this.allData)
    if (this.searchString != "") {
      this.postData = this.allData.filter((data) => {
        if (this.options=="Title")
          if (String(data.title).indexOf(this.searchString) != -1)
            return data;

        if (this.options=="Description")
          if (String(data.description).indexOf(this.searchString) != -1)
            return data;

        if (this.options=="Tags")
          if (String(data.tags).indexOf(this.searchString) != -1)
            return data;

        if (this.options=="Dated")
          if (data.Dated == this.searchString)
            return data;

      })
    }
    else
      this.postData = this.allData;
    this.setState({ posts: this.postData });
    console.log()

  }
  changeOption = (event) => {
    //console.log("VAlue", event.target.options);
this.options=event.target.value;
console.log("VAlue",this.options);
  }
  render() {
    const options = [
      { key: 1, text: 'Title', value: 1 },
      { key: 2, text: 'Description', value: 2 },
      { key: 3, text: 'Tags', value: 3 },
      { key: 4, text: 'Dated', value: 4 },
    ]
    let redirect=false;
if(localStorage.getItem("login"))
redirect=false;
else
redirect=true;


    if(redirect)
{
return (
    <Navigate to="/login"/>
);
}
else{
    return (


      <>
        <div class="ui raised very padded  container segment">
          {this.state.message}

          <Form>
            <Form.Group widths='equal'>
              {/* <Dropdown options={options} simple item text='Filter Search' onChange={this.changeOption}> */}
          <select onChange={this.changeOption}>
            <option key="1">Title</option>
            <option  key="2">Description</option>
            <option key="3">Tags</option>
            <option key="4">Dated</option>
          </select>
              
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                onChange={this.handleChange}
                placeholder='Question to search'
              />
              <Form.Button
                onClick={this.searchHandler}

                id='form-subcomponent-shorthand-input-last-name'


              >Search
              </Form.Button>
            </Form.Group>
          </Form>
          <Header as='h3' block> All Questions</Header>
          {
            this.state.posts.map(data =>
              <Card>
                <Card.Content header={data.title} />
                <Card.Content description={data.description} />
                <Card.Content extra>
                  <Button onClick={()=>{this.deleteData(data.id)}}>Delete</Button>
                </Card.Content>
              </Card>
            )
          }
        </div>

      </>)
  }}

}


export default ListQuestion;