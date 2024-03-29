const config = {
 content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
 purge: false,
 theme: {
  extend: {
   boxShadow: {
    DEFAULT: '0 0px 5px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    'drop-down-shadow': '0 6px 8px 8px rgba(0, 0, 0, 0.04)',
   },
   colors: {
    primary: '#BD0033',
    primary0: '#ff8aa9',
    primary1: '#ff5784',
    primary2: '#ff245f',
    primary3: '#f00041',
    primary4: '#BD0033',
    primary5: '#8a0025',
    primary6: '#570017',
    primary7: '#24000a',
    primary8: '#000',
    primary9: '#000',
    'primary-light': '#ff245f',
    'primary-main': '#BD0033',
    'primary-dark': '#570017',
    secondary: '#1f425d',
    secondary0: '#77aad1',
    secondary1: '#5192c4',
    secondary2: '#3978a9',
    secondary3: '#2c5d83',
    secondary4: '#1f425d',
    secondary5: '#122737',
    secondary6: '#050c11',
    secondary7: '#000',
    secondary8: '#000',
    secondary9: '#000',
    'secondary-light': '#3978a9',
    'secondary-main': '#1f425d',
    'secondary-dark': '#050c11',
    neutral: '#969696',
    neutral0: '#fafafa',
    neutral1: '#e1e1e1',
    neutral2: '#c8c8c8',
    neutral3: '#afafaf',
    neutral4: '#969696',
    neutral5: '#7a7a7a',
    neutral6: '#606060',
    neutral7: '#464646',
    neutral8: '#2c2c2c',
    neutral9: '#121212',
    'neutral-light': '#c8c8c8',
    'neutral-main': '#969696',
    'neutral-dark': '#606060',
    error: '#ff5722',
    error0: '#fff2ee',
    error1: '#fcb',
    error2: '#ffa588',
    error3: '#ff7e55',
    error4: '#ff5722',
    error5: '#ee3900',
    error6: '#bb2d00',
    error7: '#882100',
    error8: '#551500',
    error9: '#220800',
    'error-light': '#ffa588',
    'error-main': '#ff5722',
    'error-dark': '#bb2d00',
    warning: '#ffc14d',
    warning0: '#fff',
    warning1: '#fff6e6',
    warning2: '#ffe5b3',
    warning3: '#ffd380',
    warning4: '#ffc14d',
    warning5: '#ffaf1a',
    warning6: '#e69600',
    warning7: '#b37500',
    warning8: '#805400',
    warning9: '#4d3300',
    'warning-light': '#ffe5b3',
    'warning-main': '#ffc14d',
    'warning-dark': '#e69600',
    info: '#48c6f0',
    info0: '#fff',
    info1: '#d5f2fc',
    info2: '#a6e4f8',
    info3: '#77d5f4',
    info4: '#48c6f0',
    info5: '#19b7ec',
    info6: '#1095c2',
    info7: '#0c7193',
    info8: '#084d64',
    info9: '#042935',
    'info-light': '#a6e4f8',
    'info-main': '#48c6f0',
    'info-dark': '#1095c2',
    success: '#3dcc8e',
    success0: '#def7ec',
    success1: '#b6ecd5',
    success2: '#8de2bd',
    success3: '#65d7a6',
    success4: '#3dcc8e',
    success5: '#2da973',
    success6: '#228158',
    success7: '#17593c',
    success8: '#0d3021',
    success9: '#020805',
    'success-light': '#8de2bd',
    'success-main': '#3dcc8e',
    'success-dark': '#228158',
    text: '#212121',
    'text-primary': '#212121',
    'text-secondary': 'rgba(33,33,33,0.65)',
    'text-hint': 'rgba(33,33,33,0.44999999999999996)',
    'text-disabled': 'rgba(33,33,33,0.38)',
    white: '#fff',
    black: '#000',
    base: '#fff',
    'base-reverse': '#000',
    background: '#fafafa',
    background1: '#fff',
    background2: '#fff',
    background3: '#fff',
    background4: '#fff',
    background5: '#fff',
    background6: '#fff',
    background7: '#fff',
    background8: '#fff',
    background9: '#fff',
    background10: '#fff',
    background11: '#fff',
    background12: '#fff',
    background13: '#fff',
    background14: '#fff',
    background15: '#fff',
    background16: '#fff',
    background17: '#fff',
    background18: '#fff',
    background19: '#fff',
    background20: '#fff',
    background21: '#fff',
    background22: '#fff',
    background23: '#fff',
    background24: '#fff',
    'on-primary': '#fff',
    'on-primary0': '#212121',
    'on-primary1': '#212121',
    'on-primary2': '#212121',
    'on-primary3': '#212121',
    'on-primary4': '#fff',
    'on-primary5': '#fff',
    'on-primary6': '#fff',
    'on-primary7': '#fff',
    'on-primary8': '#fff',
    'on-primary9': '#fff',
    'on-primary-light': '#212121',
    'on-primary-main': '#fff',
    'on-primary-dark': '#fff',
    'on-secondary': '#fff',
    'on-secondary0': '#212121',
    'on-secondary1': '#212121',
    'on-secondary2': '#212121',
    'on-secondary3': '#fff',
    'on-secondary4': '#fff',
    'on-secondary5': '#fff',
    'on-secondary6': '#fff',
    'on-secondary7': '#fff',
    'on-secondary8': '#fff',
    'on-secondary9': '#fff',
    'on-secondary-light': '#212121',
    'on-secondary-main': '#fff',
    'on-secondary-dark': '#fff',
    'on-neutral': '#212121',
    'on-neutral0': '#212121',
    'on-neutral1': '#212121',
    'on-neutral2': '#212121',
    'on-neutral3': '#212121',
    'on-neutral4': '#212121',
    'on-neutral5': '#fff',
    'on-neutral6': '#fff',
    'on-neutral7': '#fff',
    'on-neutral8': '#fff',
    'on-neutral9': '#fff',
    'on-neutral-light': '#212121',
    'on-neutral-main': '#212121',
    'on-neutral-dark': '#fff',
    'on-error': '#fff',
    'on-error0': '#212121',
    'on-error1': '#212121',
    'on-error2': '#212121',
    'on-error3': '#212121',
    'on-error4': '#fff',
    'on-error5': '#fff',
    'on-error6': '#fff',
    'on-error7': '#fff',
    'on-error8': '#fff',
    'on-error9': '#fff',
    'on-error-light': '#212121',
    'on-error-main': '#fff',
    'on-error-dark': '#fff',
    'on-warning': '#212121',
    'on-warning0': '#212121',
    'on-warning1': '#212121',
    'on-warning2': '#212121',
    'on-warning3': '#212121',
    'on-warning4': '#212121',
    'on-warning5': '#212121',
    'on-warning6': '#212121',
    'on-warning7': '#fff',
    'on-warning8': '#fff',
    'on-warning9': '#fff',
    'on-warning-light': '#212121',
    'on-warning-main': '#212121',
    'on-warning-dark': '#212121',
    'on-info': '#212121',
    'on-info0': '#212121',
    'on-info1': '#212121',
    'on-info2': '#212121',
    'on-info3': '#212121',
    'on-info4': '#212121',
    'on-info5': '#212121',
    'on-info6': '#fff',
    'on-info7': '#fff',
    'on-info8': '#fff',
    'on-info9': '#fff',
    'on-info-light': '#212121',
    'on-info-main': '#212121',
    'on-info-dark': '#fff',
    'on-success': '#212121',
    'on-success0': '#212121',
    'on-success1': '#212121',
    'on-success2': '#212121',
    'on-success3': '#212121',
    'on-success4': '#212121',
    'on-success5': '#212121',
    'on-success6': '#fff',
    'on-success7': '#fff',
    'on-success8': '#fff',
    'on-success9': '#fff',
    'on-success-light': '#212121',
    'on-success-main': '#212121',
    'on-success-dark': '#fff',
    'on-white': '#212121',
    'on-black': '#fff',
    'on-base': '#212121',
    'on-base-reverse': '#fff',
    'on-background': '#212121',
    'on-background1': '#212121',
    'on-background2': '#212121',
    'on-background3': '#212121',
    'on-background4': '#212121',
    'on-background5': '#212121',
    'on-background6': '#212121',
    'on-background7': '#212121',
    'on-background8': '#212121',
    'on-background9': '#212121',
    'on-background10': '#212121',
   },
  },
 },
 variants: {
  extend: {},
  outline: ['focus'],
 },
 plugins: [],
};

export default config;
