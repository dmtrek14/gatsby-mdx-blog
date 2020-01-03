import Typography from "typography"
//import fairyGateTheme from "typography-theme-fairy-gates"
//import elkGlenTheme from "typography-theme-elk-glen";
import oceanBeachTheme from "typography-theme-ocean-beach";
oceanBeachTheme.baseFontSize = '20px';

const typography = new Typography(oceanBeachTheme)

export const { scale, rhythm, options } = typography
export default typography