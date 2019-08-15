import React from 'react';
import Total from '../Total/Total'
import Summary from '../Summary/Summary'

class Cart extends React.Component {
    render() {
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                <Summary 
                    USCurrencyFormat={this.props.USCurrencyFormat}
                    selected={this.props.selected}/>
                <Total 
                    USCurrencyFormat={this.props.USCurrencyFormat}
                    selected={this.props.selected}/>
            </section>
            
        )
    }
}

export default Cart