import Footer from "./Components/Footer";
import Header from "./Components/Header";

import {ReactElement} from "react"


type UserBaseProps = {
    element: ReactElement
}

export default function UserBase(props: UserBaseProps){
    return (
        <>
        <Header/>
        {props.element}
        <Footer/>
        </>
    );
}