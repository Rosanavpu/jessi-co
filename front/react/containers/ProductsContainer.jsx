import React from 'react'
import {connect} from 'react-redux'
import Products from '../components/Products';
import {fetchProductsById} from '../../store/actions/getProducts'
class ProductsContainer extends React.Component{
    constructor(props){
        super(props);
        
    }
    handleClick(id){
        this.props.fetchProduct(id)
    }

    render(){
        return (
            <Products products={this.props.products} handleClick={this.handleClick}/>
        )
    }
}
const mapStateToProps = ({products})=>({
    products:products.products.data
})

const mapDispatchToProps = ()=>({
    fetchProduct : fetchProductsById
})
export default connect (
    mapStateToProps,
    mapDispatchToProps
)(ProductsContainer)