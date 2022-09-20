import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { TodosSection } from "../components/TodosSection";
import { TodosContext } from "../context/TodosContext";

export function App(){

    return(
        <>
        <TodosContext>
            <Header/>
            <Hero/>
            <TodosSection/>
        </TodosContext>
        <Footer/>
        </>
    )
}