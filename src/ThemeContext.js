import React from "react";

export const ThemeContext = React.createContext();

export const themes = {
    dark: {
      color: "#FFFFFF",
      text: "#121212",
      background: "#3A3B3C",
      items: "#242526",
      screen: "#18191A",
      button: "#03DAC5",
      theme: "Light Mode"
    },
    light: {
      color: "#121212",
      text: "#FFFFFF",
      background: "#FAFAFA",
      items: "#FFFFFF",
      screen: "#F1F1F1",
      button: "#6200EE",
      theme: "Dark Mode"
    }
};

export class ThemeContextProvider extends React.Component {

    constructor() {
        super()

        this.state = {
            theme: themes.light,
            lastVisited: null
        }
    }

    toggleTheme = () => {
        if (this.state.theme === themes.light) {
            this.setState({
                theme: themes.dark
            });
        }
        else if (this.state.theme === themes.dark) {
            this.setState({
                theme: themes.light
            });
        }
    }

    updateLastVisited = (vehicle) => {
        this.setState({
            lastVisited: vehicle
        });
    }

    render() {

        const contextVal = {
            themes: this.state,
            toggleTheme: this.toggleTheme,
            updateLastVisited: this.updateLastVisited
        }

        return (
            <ThemeContext.Provider value={contextVal}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}