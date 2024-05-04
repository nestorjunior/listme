import styled from 'styled-components'

export const CardWrapper = styled.div`
	height: 230px;
	width: 100%;
	background: var(--rose-100);
	border-radius: 25px;
	border: 6px solid var(--white-100);
`
export const CardImage = styled.img`
	object-fit: cover;
	border-radius: 50%;
	border: 5px solid var(--blue-100);

	@media (min-width: 320px) and (max-width: 480px) {
		width: 6.25rem;
	}
`
export const CardContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 0;
`
export const CardTitle = styled.h5`
	font-size: 1.563rem;
	color: var(--blue-600);
`
export const CardFollowers = styled.div`
	display: flex;
	justify-content: space-between;
`
export const CardBoxFollowers = styled.span`
	text-align: center;
	&:first-child {
		margin-right: 25px;
	}
	&:last-child {
		margin-right: 0.625rem;
	}
`
export const CardParagraph = styled.p`
	color: var(--gray-600);
	margin-bottom: 0;
`
export const CardBoxParagraph = styled.p`
	color: var(--gray-600);
	font-size: 1.125rem;
	font-weight: bold;
	margin-bottom: 0;
`
export const CardFooter = styled.div`
	display: flex;
	justify-content: space-between;
`

export const CardButton = styled.button`
	background-color: var(--orange-600);
	color: #fff;
	transition: background-color 0.3s, color 0.3s;
	border: 0;
	font-size: 0.875rem;
	&:hover {
		background-color: var(--orange-600-hover);
		color: #fff;
	}
`
export const CardBoxShareUser = styled.div`
	display: flex;
	align-items: center;
`

export const CardBody = styled.div`
	@media (min-width: 320px) and (max-width: 480px) {
		padding-top: 0;
	}
`
