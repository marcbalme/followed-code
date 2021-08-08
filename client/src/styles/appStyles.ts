import { TextSizetypes } from '../types/styles';

export const appStyles = {
  colors: {
    metal: '#292f36',
    white: '#FFFFFF',
    cream: '#f7fff7',
    purple: '#845ec2',
    gray: '#d9e8ee',
    greenBlue: '#34839c'
  },
  letterSpacing: '0.3px'
};

const size = {
  mobile: '575px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1200px'
};

export const breakpoint = {
  smallOnly: `@media screen and (max-width: ${size.mobile})`,
  mobileL: `@media screen and (min-width: ${size.mobile})`,
  tablet: `@media screen and (min-width: ${size.tablet})`,
  laptop: `@media screen and (min-width: ${size.laptop})`,
  desktop: `@media screen and (min-width: ${size.desktop})`
};

export const textSize: TextSizetypes = {
  small: {
    mobile: 13,
    tablet: 13,
    desktop: 14
  },
  medium: {
    mobile: 15,
    tablet: 15,
    desktop: 16
  },
  large: {
    mobile: 16,
    tablet: 16,
    desktop: 18
  }
};
