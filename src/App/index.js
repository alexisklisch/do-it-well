import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { TodosSection } from "../components/TodosSection";

export function App(){

    return(
        <>
            <Header/>
            <Hero/>
            <TodosSection/>
            <Footer/>
        </>
    )
}