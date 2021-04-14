import React from "react";

const MaskNumber = (WrappedComponent) => {
    return class extends React.Component {

        maskNumber = (vehicleNo) => {
            return vehicleNo.substring(0, 3) + vehicleNo.substring(3, vehicleNo.length).replace(/[A-Z\d]/gi, "X");
        }

        render() {
            return (
                <div>
                    <WrappedComponent {...this.props} maskNumber={(vehicleNo) => this.maskNumber(vehicleNo)}/>
                </div>
            )
        }
    }
}

export default MaskNumber;