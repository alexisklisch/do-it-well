import { useContext } from "react"
import TodosContext from "../context/TodosContext"
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Modal } from "../components/Modal";
import { ModalBox } from "../components/ModalBox";
import { TodosSection } from "../components/TodosSection";

export function AppUI(){
    const { openModal } = useContext(TodosContext)

    return(
        <>
            <Header/>
            <Hero/>
            <TodosSection/>
            <Footer/>

            {openModal && (
                <Modal>
                    <ModalBox/>
                </Modal>
            )}
        </>
    )
}