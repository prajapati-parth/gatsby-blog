import ReactGA from 'react-ga'
ReactGA.initialize('UA-111782126-2')

export default {
  trackPageView(pageLocation) {
    ReactGA.pageview(pageLocation)
  },

  trackLinkClick(fieldsObject) {
    ReactGA.event(fieldsObject)
  }
}