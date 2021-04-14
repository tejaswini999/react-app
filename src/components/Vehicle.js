import React, { Component } from 'react';
import { ThemeContext } from "../ThemeContext";
import MaskNumber from "./MaskNumberHoc";

class Vehicle extends Component {

    render() {
        return (
            <ThemeContext.Consumer>
                {context => (
                    <div style={{color: context.themes.theme.color,backgroundColor: context.themes.theme.items}} className={context.themes.lastVisited && context.themes.lastVisited.id === this.props.vehicle.id ? "row2" : "row"}>
                        <div className="col">{this.props.vehicle.firstName + " " + this.props.vehicle.lastName}</div>
                        <div className="col">{this.props.maskNumber(this.props.vehicle.vehicleNo)}</div>
                        <div className="col">
                            <button style={{color: context.themes.theme.text,backgroundColor: context.themes.theme.button}} className="button" onClick={() => {this.props.viewDetails(this.props.vehicle); context.updateLastVisited(this.props.vehicle);}} >View</button>
                        </div>
                        <div className="col">
                            <button style={{color: context.themes.theme.text,backgroundColor: context.themes.theme.button}} className="button" onClick={() => this.props.editVehicle(this.props.vehicle)}>Edit</button>
                        </div>
                        <div className="col">
                            <button style={{color: context.themes.theme.text,backgroundColor: context.themes.theme.button}} className="button" onClick={() => this.props.deleteVehicle(this.props.vehicle.id)}>Delete</button>
                        </div>
                    </div>
                )}
            </ThemeContext.Consumer>

        );
    }
}

export default MaskNumber(Vehicle);