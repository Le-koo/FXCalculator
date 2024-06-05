import React, { Component, createContext } from 'react';
import "../Css/Navbar.css";
export const ThemeContext = createContext();
class ThemeContextProvider extends Component {
state = {
    isLightTheme: true,
    light: { syntax: '#555', ui: '#ddd', bg: '#eeefef' }, dark: { syntax: '#ddd', ui: '#333', bg: '#262626'}
}

toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
}

render() {
    return (
        <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
        {this.props.children}
        </ThemeContext.Provider>
    );
}


}
export default ThemeContextProvider;