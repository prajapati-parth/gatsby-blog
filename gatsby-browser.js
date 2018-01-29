import Analytics from './src/utils/analytics'

exports.onRouteUpdate = (state, page, pages) => {
  Analytics.trackPageView(state.location.pathname);
};
