import React, { Component } from 'react'

export class Smart extends Component {
  render() {
    return (
     <>

    <div className="col-12 col-md-3">
    <div className="card" >
  <img src={this.props.foto} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{this.props.title}</h5>
    <p className="card-text">{this.props.text1}</p>
    <p className="card-text">{this.props.text2}</p>
    <p className="card-text">{this.props.text3}</p>
    <p className="card-text">{this.props.text4}</p>
    <p className="card-text">{this.props.text5}</p>


  </div>
</div>
    </div>


     
     
     
     </>
    )
  }
}

export default Smart