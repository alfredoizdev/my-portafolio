import { FunctionComponent } from "react";
import AppWrap from "wrapper/AppWrap";
import ContactComponent from "./ContactComponent";

interface ContactContainerProps {}

const ContactContainer: FunctionComponent<ContactContainerProps> = () => {
	return <ContactComponent idName="contact" />;
};

export default AppWrap({ Component: ContactContainer, idName: "contact" });
