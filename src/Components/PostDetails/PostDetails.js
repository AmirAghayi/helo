import React, { Component } from 'react';
import axios from 'axios';


class PostDetails extends Component {

    constructor(){
        super();

        this.state = {
            title: "",
            user: "",
            image: "",
            content: ""
        }
    }

    componentWillMount = () => {
        axios.get(`/api/postdetails/${this.props.match.params.id}`)
        .then( response => {
            console.log(response)
             this.setState({
                 title: response.data.title,
                 user: response.data.user,
                 image: response.data.imageurl,
                 content: response.data.content
             });
        });
    
    
    
    }

    render(){
        return(
            <div className="post-details">


                <div>
                     <h1> {this.state.title} </h1>
                </div>

                <div>
                    <img src={this.state.image} />
                </div>

                <div>
                    <h1>{this.state.user} </h1>
                </div>


                <div>
                   <p> {this.state.content} </p>
                </div>

               

           </div>
        )
    }



}



export default PostDetails;
