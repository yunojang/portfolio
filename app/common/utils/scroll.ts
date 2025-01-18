export const lockScroll = () => {
  const bodyStyle = document.body.style;

  bodyStyle.position = "fixed";
  bodyStyle.width = "100%";
  bodyStyle.overflowY = "scroll";
};

export const releaseScroll = () => {
  const bodyStyle = document.body.style;

  bodyStyle.position = "";
  bodyStyle.width = "";
  bodyStyle.overflowY = "";
};
