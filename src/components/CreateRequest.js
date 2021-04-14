import React, { Component } from 'react';
import { ThemeContext } from "../ThemeContext";
import getVehicle from './GetVehicleHoc';

class CreateRequest extends Component {

    constructor() {
        super();
        this.state = {
            id: '',
            firstName: '',
            lastName: '',
            vehicleNo: '',
            mobileNo: '',
            address: '',
            pickupDate: '',
            returnDate: ''
        }
    }

    valueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm = () => {
        if (this.props.validateReg(this.state.vehicleNo) === true) {
            fetch('http://localhost:4000/vehicles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            })
                .then(res => res.json)
                .then(data => {
                    this.navigateToVehicles();
                })
        }
        else {
            window.alert('Enter valid Vehicle Registration Number!')
        }
    }

    navigateToAddVehicle = () => {
        this.props.history.push('/addVehicle')
    }

    navigateToVehicles = () => {
        this.props.history.push('/vehicles')
    }

    render() {
        return (
            <ThemeContext.Consumer>
                {context => (
                    <div style={{ color: context.themes.theme.color, backgroundColor: context.themes.theme.screen, padding: "20px" }}>
                        <h2>Vehicle Service Request Form</h2>

                        <table>
                            <tbody>
                                <tr>
                                    <td className="left">
                                        First name:
                            </td>
                                    <td className="right">
                                        <input className="input" name="firstName" type="text" value={this.state.firstName} onChange={(e) => this.valueChange(e)}></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="left">
                                        Last name:
                            </td>
                                    <td className="right">
                                        <input className="input" name="lastName" type="text" value={this.state.lastName} onChange={(e) => this.valueChange(e)}></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="left">
                                        Vehicle registration no:
                            </td>
                                    <td className="right">
                                        <input className="input" name="vehicleNo" type="text" value={this.state.vehicleNo} placeholder="eg.ABCD12345" onChange={(e) => this.valueChange(e)}></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="left">
                                        Mobile number:
                            </td>
                                    <td className="right">
                                        <input className="input" name="mobileNo" type="text" value={this.state.mobileNo} onChange={(e) => this.valueChange(e)}></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="left">
                                        Address:
                            </td>
                                    <td className="right">
                                        <textarea className="input1" name="address" rows="4" value={this.state.address} onChange={(e) => this.valueChange(e)}></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="left">
                                        Pickup Date:
                            </td>
                                    <td className="right">
                                        <input className="input2" name="pickupDate" type="date" value={this.state.pickupDate} onChange={(e) => this.valueChange(e)}></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="left">
                                        Return date:
                            </td>
                                    <td className="right">
                                        <input className="input2" name="returnDate" type="date" value={this.state.returnDate} onChange={(e) => this.valueChange(e)}></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="left">
                                        <button style={{ color: context.themes.theme.text, backgroundColor: context.themes.theme.button }} className="button" onClick={() => this.navigateToVehicles()}>Back</button>
                                    </td>
                                    <td className="right">
                                        <button style={{ color: context.themes.theme.text, backgroundColor: context.themes.theme.button }} className="button" onClick={() => this.submitForm()}>Submit Request</button>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                )}
            </ThemeContext.Consumer>
        );
    }
}

export default getVehicle(CreateRequest)