import React from "react";

const GetVehicle = (WrappedComponent) => {
    return class extends React.Component {

        constructor() {
            super();

            this.state = {
                vehicleDetails: null
            }
        }

        getVehicleDetails = (vehicleId) => {
            fetch(`http://localhost:4000/vehicles/${vehicleId}`)
                .then(res => res.json())
                .then(data => {
                    this.setState({
                        vehicleDetails: data
                    })
                });
        }

        validateReg = (st) => {
            var isValid = false
            if (st.match(/^[A-Z][A-Z][A-Z][A-Z]\d\d\d\d\d$/)) {
                isValid = true;
            }
            return isValid;
        }

        render() {
            return (
                <div>
                    <WrappedComponent {...this.props} vehicleDetails={this.state.vehicleDetails} getVehicleDetails={(id) => this.getVehicleDetails(id)} validateReg={(st) => this.validateReg(st)} />
                </div>
            )
        }
    }
}

export default GetVehicle;