import React, { Component } from 'react';
import { ThemeContext } from "../ThemeContext";
import GetVehicle from "./GetVehicleHoc";
import MaskNumber from "./MaskNumberHoc";

class ViewRequest extends Component {

    componentDidMount() {
        const vehicleId = this.props.match.params.vehicleId;
        this.props.getVehicleDetails(vehicleId);
    }

    navigateToVehicles = () => {
        this.props.history.push('/vehicles')
    }

    editVehicle = (vehicle) => {
        this.props.history.push(`/editVehicle/${vehicle.id}`)
    }

    render() {
        return (
            <ThemeContext.Consumer>
                {context => (
                    <div style={{ color: context.themes.theme.color, backgroundColor: context.themes.theme.screen, padding: "20px" }}>
                        <h2>Vehicle View Service</h2>
                        {
                            this.props.vehicleDetails &&
                            <div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="left">
                                                First name:
                                            </td>
                                            <td className="right">
                                                {this.props.vehicleDetails.firstName}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="left">
                                                Last name:
                                            </td>
                                            <td className="right">
                                                {this.props.vehicleDetails.lastName}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="left">
                                                Vehicle registration no:
                                            </td>
                                            <td className="right">
                                                {this.props.maskNumber(this.props.vehicleDetails.vehicleNo)}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="left">
                                                Mobile number:
                                            </td>
                                            <td className="right">
                                                {this.props.vehicleDetails.mobileNo}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="left">
                                                Address:
                                            </td>
                                            <td className="right">
                                                {this.props.vehicleDetails.address}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="left">
                                                Pickup Date:
                                            </td>
                                            <td className="right">
                                                {this.props.vehicleDetails.pickupDate}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="left">
                                                Return date:
                                            </td>
                                            <td className="right">
                                                {this.props.vehicleDetails.returnDate}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="left">
                                                <button style={{ color: context.themes.theme.text, backgroundColor: context.themes.theme.button }} className="button" onClick={() => this.navigateToVehicles()}>Back</button>
                                            </td>
                                            <td className="right">
                                                <button style={{ color: context.themes.theme.text, backgroundColor: context.themes.theme.button }} className="button" onClick={() => this.editVehicle(this.props.vehicleDetails)}>Edit</button>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        }
                    </div>
                )}
            </ThemeContext.Consumer>
        );
    }
}

export default MaskNumber(GetVehicle(ViewRequest));