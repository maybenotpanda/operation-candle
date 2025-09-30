import styled from "styled-components";

export const PixelBubble = styled.div`
  display: inline-block;
  padding: 12px 16px;
  line-height: 1.4;
  position: relative;
  word-break: break-word;
  background: ${(props) => (props.$variant === "answer" ? "#a8ff60" : "#ffffff")};
  border: 3px solid #000;
  box-shadow: 4px 4px 0px #000;
  border-radius: 10px;

  &::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background: ${(props) => (props.$variant === "answer" ? "#a8ff60" : "#ffffff")};
    border: 3px solid #000;
    box-shadow: 2px 2px 0px #000;

    ${(props) =>
    props.$variant === "answer"
      ? `
        right: -16px;
        bottom: 8px;
      `
      : `
        left: -16px;
        bottom: 8px;
      `}
  }
`;
