import _ from "lodash";
import faker from "faker";
import React, { Component } from "react";
import { Search, Grid, Header, Segment } from "semantic-ui-react";
import { getAllProducts } from '../../redux/index';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'


const data = getAllProducts()

class SearchBar extends Component {

  state = { input: "", matches: [] }

  handleChange = async (event) => {
    await this.setState({ input: event.target.value })
    let matchedProducts = [];
    this.props.products.forEach(product => {
      if (product.productName.toLowerCase().includes(this.state.input.toLowerCase())) {
        matchedProducts.push({
          title: product.productName,
          description: product.productDescription,
          image: product.productImgs[0]
        })
      }
    });
    if (matchedProducts.length > 0) {
      this.setState({ matches: matchedProducts })
    } else {
      this.setState({ matches: [] })
    }
  };

  render() {
    console.log(this.props.history)

    return (
      <Grid>
        <Grid.Column width={6}>
          <Search
            placeholder="Search products"
            onSearchChange={this.handleChange}
            value={this.state.input}
            results={this.state.matches}
            // onResultSelect = {}
          />

        </Grid.Column>
      </Grid>


    );



  }

}
function mapStateToProps(state) {
  return {
    products: state.allProducts.products
  };
}

export default withRouter(connect(mapStateToProps)(SearchBar));