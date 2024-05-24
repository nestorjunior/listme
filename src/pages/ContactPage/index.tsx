import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { ContactUs } from "../../components/ContactUs"
import { MainContainer } from './styles';

export function ContactPage () {
	return(
		<>
			<div className="container-fluid px-0">
				<Navbar/>
				<MainContainer>
					<ContactUs />
				</MainContainer>
				<Footer/>
			</div>
		</>
	)
}