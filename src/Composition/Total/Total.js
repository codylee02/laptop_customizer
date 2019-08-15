import React from 'react';


class Total extends React.Component {
    render() {
        return (
            <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    $325.00{/* {USCURRENCTFORMAT.format(TOTAL)} */}
                </div>
            </div>
        )
    }

}

export default Total