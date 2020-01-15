import React from 'react';
import "./ProductDetail.css"
import { Carousel, } from 'antd';
import { Rating } from 'semantic-ui-react'

class ProductDetail extends React.Component {
  
   averageRating = (arr) => {

    console.log(arr)
    let total =0
    for (let i=0; i< arr.length; i++){
      total += arr[i]
    }
    return Math.ceil(total/arr.length)
}

   onChange = (a, b, c) => {
        console.log(a, b, c);
      }

      render () {
        const avgRating = this.averageRating(this.props.ratings)
  return (

    
        <div id ="wholeThing">
        <div id="pictureBox">
         <Carousel afterChange={this.onChange}>
          <div className ="slide">
          <img src="https://cdn.thingiverse.com/assets/bd/99/61/67/40/featured_preview_fussleiste_innere_ecke_90.stl" alt="preview_fussleite"></img>
          
        </div>
        <div className="slide">
        <img src="https://assets.pinshape.com/uploads/image/file/189701/container_superstrings-puzzle-3d-printing-189701.jpg" alt="preview_puzzle"></img>
          
        </div>
        <div className="slide">
          <img src="https://assets.pinshape.com/uploads/image/file/189702/container_superstrings-puzzle-3d-printing-189702.jpg" alt="preview_superstring"></img>
        </div>
        <div className ="slide">
          <img src="https://assets.pinshape.com/uploads/image/file/2632/container_elephant-3d-printing-2632.jpg" alt="preview_elephant"></img>
        </div>
      </Carousel>
        </div>
        <div id="description">
        <h2>{this.props.name}</h2>
        <p>{this.props.description}</p>
          <Rating icon='star' defaultRating={avgRating} maxRating={5} disabled/>
          <span>{this.props.ratingsCount} ratings</span>
        </div>
        </div>
      );
}
}

export default ProductDetail
