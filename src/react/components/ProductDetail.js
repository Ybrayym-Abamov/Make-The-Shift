import React from 'react';
import "./ProductDetail.css"
import { Carousel, } from 'antd';
import { Rating } from 'semantic-ui-react'

export function ProductDetail () {
      
  function onChange(a, b, c) {
        console.log(a, b, c);
      }
        return (
        
        <div id ="wholeThing">
        <div id="pictureBox">
         <Carousel afterChange={onChange}>
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
          <h2>Design Title</h2>
          <h3>Author/Date</h3>
          <p>Product description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <Rating icon='star' defaultRating={4} maxRating={5} disabled/>
          <span>Rating</span>
        </div>
        </div>
      );
}
