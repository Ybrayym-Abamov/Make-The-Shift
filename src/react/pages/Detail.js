import React from "react"
import { connect } from "react-redux";
import { ProductDetail  } from '../components'
import { getSingleProduct } from "../../redux/actionCreators";

class Detail extends React.Component {
    
    state = {
    product: null
  };
  
    componentDidMount = () => {
        this.props.getSingleProduct(this.props.match.params.id);
      };
      
    componentDidUpdate = previousProps => {
      if (this.props.product && previousProps.product !== this.props.product) {
        this.setState({ product: this.props.product });
      }
}


render() {
  const {product} = this.state

  return (
    <>
     {product && <div style ={{ marginTop: "50px"}}>
         <ProductDetail
            name={product.productName}
            description={product.productDescription}
            imgs={product.productImgs}
            ratings={product.ratings}
            ratingsCount={product.ratingsCount}
         />
     </div>}
     </>
    );

  }
}

const mapDispatchToProps = dispatch => {
    return {
      getSingleProduct: (productId) => {
        dispatch(getSingleProduct(productId));
      }
    };
  };

const mapStateToProps = state => {
    return {
      product: state.singleProduct.product
    };
  };


export default connect(mapStateToProps, mapDispatchToProps)(Detail);

// export default Detail

// this.props.match.params.id