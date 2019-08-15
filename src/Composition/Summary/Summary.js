import React from 'react';
import Total from '../Total/Total'

class Summary extends React.Component {
    render() {
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                {/* {SUMMARY GGOES HERE} */}
                <Total />
            </section>
            
        )
    }
}

export default Summary