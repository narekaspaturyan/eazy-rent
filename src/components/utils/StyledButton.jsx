import styled from "styled-components";

const StyledButton = styled.button`
  ${({
    theme,

    backgroundColor = theme.blue,
    borderRadius = "10px",
    border = "none",

    color = theme.white,

    disabled = false,

    fontStyle = "normal",
    fontSize = "14px",
    fontWeight = 900,

    letterSpacing = "1px",
    lineHeight = "18px",

    textAlign = "center",
    textTransform = "uppercase",
    type = "button",

    width = "110px",
    height = "40px",
    margin = "0px",

    display = "flex",
    justifyContent = "space-around",
    alignItems = "center",
  }) => {
    return {
      fontFamily: "Avenir",
      backgroundColor,
      borderRadius,
      border,

      color,
      cursor: "pointer",

      disabled,

      ":focus": {
        outline: "none",
      },
      fontStyle,
      fontSize,
      fontWeight,

      letterSpacing,
      lineHeight,

      textAlign,
      textTransform,
      theme,
      type,
      width,
      height,
      margin,

      display,
      justifyContent,
      alignItems,
    };
  }};
`;

export default StyledButton;
