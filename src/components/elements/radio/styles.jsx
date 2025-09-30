import styled from "styled-components";

export const HiddenRadio = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span::after {
    content: "";
    position: absolute;
    left: 4px;
    top: 4px;
    width: 10px;
    height: 10px;
    background: #1db954;
    box-shadow: 0 0 0 2px #111;
  }
`;

export const PixelRadio = styled.span`
  width: 22px;
  height: 22px;
  border: 3px solid #222;
  border-radius: 4px;
  position: relative;
  display: inline-block;
  background-color: #111;
  box-shadow: 0 3px 0 rgba(0, 0, 0, 0.6);

  background-image: repeating-linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.02) 0 6px,
      transparent 6px 12px
    ),
    repeating-linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.02) 0 6px,
      transparent 6px 12px
    );
  background-blend-mode: overlay;
`;

export const RadioText = styled.span`
  font-size: 12px;
  // color: #cfcfcf;
`;