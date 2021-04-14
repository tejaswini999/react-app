import React, { Component } from 'react';
import Vehicle from './Vehicle';
import { ThemeContext } from "../ThemeContext";

class VehicleList extends Component {

    constructor() {
        super();
        this.state = {
            vehicles: []
        }
    }

    componentDidMount() {
        this.getVehicles();
    }

    getVehicles = () => {
        fetch('http://localhost:4000/vehicles')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    vehicles: data
                })
            });
    }

    navigateToAddVehicle = () => {
        this.props.history.push('/addVehicle')
    }

    navigateToVehicles = () => {
        this.props.history.push('/vehicles')
    }

    viewDetails = (vehicle) => {
        this.props.history.push(`/vehicleDetails/${vehicle.id}`)
    }

    editVehicle = (vehicle) => {
        this.props.history.push(`/editVehicle/${vehicle.id}`)
    }

    deleteVehicle = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            fetch('http://localhost:4000/vehicles/' + id, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    this.getVehicles();
                })
        }

    }

    render() {
        return (
            <ThemeContext.Consumer>
                {context => (
                    <div style={{color: context.themes.theme.color,backgroundColor: context.themes.theme.screen, padding: "20px"}}>
                        <h2>Vehicle Service Management</h2>

                        <div className="home">
                            {
                                this.state.vehicles.map(item => (
                                    <div key={item.id}>
                                        <Vehicle editVehicle={this.editVehicle} deleteVehicle={this.deleteVehicle} viewDetails={(vehicle) => this.viewDetails(vehicle)} vehicle={item} />
                                    </div>
                                ))
                            }

                            <div className="row1">
                                <div className="col1">
                                    <button style={{color: context.themes.theme.text,backgroundColor: context.themes.theme.button}} className="button1" onClick={() => this.props.undoAction()}>Undo</button>
                                </div>
                                <div className="col1">
                                    <button style={{color: context.themes.theme.text,backgroundColor: context.themes.theme.button}} className="button1" onClick={() => this.navigateToAddVehicle()} >Add New Request</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </ThemeContext.Consumer>
        );
    }
}

export default VehicleList;