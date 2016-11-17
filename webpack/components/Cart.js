import React from 'react'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'
import classAutoBind from 'react-helpers/dist/classAutoBind'

class Cart extends React.Component {
    constructor(props) {
        super(props)
        classAutoBind(this)
        // this.state = {}
        this.state = sharedState()
    }

    componentDidMount() {
        // attachSharedState(this, (state) => this.setState({sharedState: state}))
        attachSharedState(this)

        this.getCart()
    }

    componentWillUnmount() {
        detachSharedState(this)
    }

    getCart() {
        fetch('/carts', {
            method: 'GET'
        })
        .then(response => response.json())
        .then(this.handleCart)
    }

    handleCart(response) {
        console.log('cart: ', response)
        // sharedState({
        //     cart: response.cart
        // })
    }

    render() {
        return <div className="container headerMargin">
            <div className="row">
                <div className="col-sm-9 panel panel-info">
                    <div className="panel-body">
        					<div className="row">
        						<div className="col-xs-2"><img className="img-responsive" src="http://ecx.images-amazon.com/images/I/91-M8oHN-TL._UX679_.jpg"/>
        						</div>
        						<div className="col-xs-4">
        							<h4 className="product-name"><strong>Product name</strong></h4><h4><small>Product description</small></h4>
        						</div>
        						<div className="col-xs-6">
        							<div className="col-xs-6 text-right">
        								<h6><strong>25.00 <span className="text-muted">x</span></strong></h6>
        							</div>
        							<div className="col-xs-4">
        								<input onClick="" onChange="" type="text" className="form-control input-sm" value="1"/>
        							</div>
        							<div className="col-xs-2">
        								<button type="button" className="btn btn-link btn-xs">
        									<span className="glyphicon glyphicon-trash"> </span>
        								</button>
        							</div>
        						</div>
        					</div>
        				<hr/>
                    </div>
                    <div className="row">
                        <div className="text-center">
                            <div className="col-xs-10">
                                <h6 className="text-right">Tax</h6>
                            </div>
                            <div className="col-xs-2">
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="text-center">
                            <div className="col-xs-10">
                                <h6 className="text-right">Shipping</h6>
                            </div>
                            <div className="col-xs-2">
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="text-center">
                            <div className="col-xs-10">
                                <h6 className="text-right">Sub Total</h6>
                            </div>
                            <div className="col-xs-2">
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="panel-body">
                        <div className="row text-right">
        					<div className="col-xs-12">
        						<h4 className="text-right">Total
                                    <strong>$50.00</strong></h4>
        					</div>
        				</div>
                        <div className="row text-center">
                            <div className="col-xs-12">
                                <button type="button" className="btn btn-success btn-block">
                                    Checkout
                                </button>
                            </div>
        				</div>
                    </div>
                </div>
            </div>
        </div>

    }
}

export default Cart
