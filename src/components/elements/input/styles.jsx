// ** Styled Imports
import styled from 'styled-components'

export const PixelInput = styled.input`
	padding: 12px 14px;
	border: 3px solid #222;
	border-radius: 6px;
	background-color: #111;
	color: #eee;
	font-size: 14px;
	outline: none;
	box-shadow: 0 4px 0 rgba(0, 0, 0, 0.6), inset 0 -3px 0 rgba(0, 0, 0, 0.4);

	background-image: repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.02) 0 6px, transparent 6px 12px),
		repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.02) 0 6px, transparent 6px 12px);
	background-blend-mode: overlay;

	&:focus {
		border-color: #1db954;
		box-shadow: 0 6px 0 rgba(0, 0, 0, 0.6), 0 0 0 4px rgba(29, 185, 84, 0.08);
	}
`
