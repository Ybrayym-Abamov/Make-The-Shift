import React from "react";
import { getAllProducts } from "../../redux/actionCreators";
import { connect } from "react-redux";
import { MenuBody, ProductCard } from "../components/index.js";
import "./Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  componentDidMount = () => {
    this.props.getAllProducts();
  };

  componentDidUpdate = previousProps => {
    if (this.props.products && previousProps.products !== this.props.products) {
      this.setState({ products: this.props.products });
    }
  };

  getFourMostPopularProducts = () => {
    const { products } = this.state;

    if (products.length > 0) {
      let sortedProducts = products.sort((a, b) => {
        if (a.ratingsCount > b.ratingsCount) {
          return -1;
        }
        if (a.ratingsCount < b.ratingsCount) {
          return 1;
        }
        return 0;
      });

      return sortedProducts.filter(product => {
        if (sortedProducts.indexOf(product) < 4) {
          return product;
        }
      });
    }
    return [];
  };

  render() {
    const topFour = this.getFourMostPopularProducts();
    return (
      <React.Fragment>
        <MenuBody />
        <div className="popular-wrapper">
          <h3 className="popular__heading">Most Popular</h3>
          <div className="Home-mostPopular">
            {topFour.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllProducts: () => {
      dispatch(getAllProducts());
    }
  };
};

const mapStateToProps = state => {
  return {
    products: state.allProducts.products
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
