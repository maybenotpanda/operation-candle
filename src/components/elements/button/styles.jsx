// ** Styled Imports
import styled from 'styled-components'

export const StyledButton = styled.button`
	background-color: #1db954;
	border: 3px solid #222;
	border-radius: 6px;
	box-shadow: 0 4px 0 #0a0a0a;

	background-image: repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0 6px, transparent 6px 12px),
		repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.05) 0 6px, transparent 6px 12px);
	background-blend-mode: overlay;

	transition: transform 0.1s ease, box-shadow 0.1s ease;

	&:hover {
		background-color: #17a94f;
	}

	&:active {
		transform: translateY(2px);
		box-shadow: 0 2px 0 #0a0a0a;
	}

	&:disabled {
		background-color: #555;
		color: #999;
		cursor: not-allowed;
		box-shadow: 0 4px 0 #222;
	}
`
