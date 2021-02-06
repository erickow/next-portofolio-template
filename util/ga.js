import CONTACT_DATA from 'content/contact'
import ReactGA from 'react-ga'

const CONSTANT_DATA = require('../content/constant')

export const initGA = () => {
  ReactGA.initialize(CONSTANT_DATA.id)
}
export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}
export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action })
  }
}
export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal })
  }
}