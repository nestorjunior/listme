import { createGlobalStyle } from 'styled-components'

export const ResetStyles = createGlobalStyle`
	html {
		box-sizing: border-box;
		font-size: 1rem;
		height: 100%;
		margin: 0;
	}

	*, *:before, *:after {
		box-sizing: inherit;
	}

	body, h1, h2, h3, h4, h5, h6, p, ol, ul {
		margin: 0;
		padding: 0;
		font-weight: normal;
		-web-font-smoothing:antialiased;
	}

	ol, ul {
		list-style: none;
	}

	img {
		max-width: 100%;
		height: auto;
	}

	p, a {
		font-size: 0.875rem;
	}
`