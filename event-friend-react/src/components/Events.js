import React, { Component } from 'react';
import Event from "./Event";

class Events extends Component {

  constructor(props){
    super(props);

    this.state = {
      posts: []
    }
  }

  componentWillMount(){
    fetch("http://localhost:8080/event")
    .then(res => res.json())
    .then(data => this.setState({
      posts: data
    }))
  }

  render() {
    let content = this.state.posts.map(post => (
      <Event
        key = {post.id}
        id = {post.id}
        baslik = {post.baslik}
        kacKisi = {post.kacKisi}
        detay = {post.detay}
        etkinlikAdresi = {post.etkinlikAdresi}
        il = {post.il}
        ilce = {post.ilce}
        bulusmaYeri = {post.bulusmaYeri} 
      />
    ))
    return (
      <div className="container">
        {content}
      </div>
    )
  }
}

export default Events;