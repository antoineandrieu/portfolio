exports.shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  return location.href.indexOf("#") > -1 ? false : true;
};
