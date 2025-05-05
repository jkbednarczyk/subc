import { Helmet } from "react-helmet-async";
import { METADATA } from "../common/utils/metadata";
import "./AboutPage.css";
import { Footer } from "../footer/Footer.component";
import Napoleon from "../../assets/images/napoleon.jpg"
import { IconTile } from "../common/iconTile/IconTIle.component";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaDolly, FaMagnifyingGlass, FaHandshake } from "react-icons/fa6";

export const AboutPage = () => {
    return <>
        <Helmet>
            <title>{METADATA.ABOUT_TITLE}</title>
            <meta 
                name = "description" 
                content = {METADATA.ABOUT_DESCRIPTION} />
        </Helmet>
        <section className = "about_hero">
            <h1>Nasza historia i pasja</h1>
            <h2>Piękno przeszłości w sercu współczesności.</h2>
        </section>
        <section className = "about">
            <div className = "about__content-wrapper">
                <div className = "about__text-container">
                    <h3>Nasza misja</h3>
                    <p>Salon Unikatów to rodzinna inicjatywa stworzona z pasji do piękna, historii i przedmiotów z duszą. Wierzymy, że antyki to nie tylko dekoracje – to opowieści, wspomnienia i wyjątkowy klimat, który mogą Państwo zaprosić do swojego domu. </p>
                    <p>Chcemy dzielić się tą pasją, oferując Państwu unikatowe przedmioty, które łączą estetykę z historią. Naszym celem jest, aby każdy klient poczuł, że otrzymuje coś więcej niż tylko przedmiot – część dziedzictwa.</p>
                    <h3>Skąd pochodzą nasze unikaty</h3>
                    <p>Nasze kolekcje powstają dzięki starannej selekcji. Odwiedzamy giełdy staroci, domy aukcyjne i prywatne kolekcje w całej Europie, by odnaleźć prawdziwe perełki.</p>
                    <p>Każdy przedmiot trafiający do naszego salonu przechodzi dokładną weryfikację pod względem autentyczności, jakości i stanu zachowania. Tylko wtedy trafia do naszej oferty – z myślą o tym, by stał się częścią Państwa kolekcji.</p>
                    <h3>Co nas wyróżnia</h3>
                    <p>Jesteśmy małą firmą i to właśnie daje nam przewagę. Zapewniamy indywidualne podejście do każdego klienta, szybki kontakt i pełne zaangażowanie w realizację zamówień.</p>
                    <p>Dbamy o bezpieczeństwo zakupów: każdy przedmiot pakujemy z najwyższą starannością, by dotarł w nienaruszonym stanie. Zadowolenie klientów jest dla nas najważniejsze – to ono motywuje nas do dalszego działania.</p>
                </div>
                <div className = "about__image-container">
                    <img src = {Napoleon} alt = "About Us" className = "about__image" />  
                    <p>"Każdy przedmiot ma swoją historię. My pomagamy ją opowiedzieć."</p> 
                </div>
            </div>
            <div className = "about__tiles-container">
                <IconTile 
                    icon = {<FaMagnifyingGlass/>} 
                    title = {"Autentyczność"} />
                <IconTile 
                    icon = {<FaDolly/>} 
                    title = {"Bezpieczne pakowanie"} />
                <IconTile 
                    icon = {<FaHandshake/>} 
                    title = {"Bezpośredni kontakt"} /> 
                <IconTile 
                    icon = {<IoMdCheckmarkCircleOutline/>} 
                    title = {"Zaufanie kolekcjonerów"} />            
            </div>
        </section>
        <Footer/>
    </>
};