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
            <div>


                <img src={this.state.image} />
           </div>
        )
    }



}



export default PostDetails;
