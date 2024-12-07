import Footer from "../components/Footer"
import Hero from "../components/Hero"
import NavBar from "../components/NavBar"

export default function HomePage() {

    return (
        <div className="home">
            <NavBar />
            <Hero />
            <Footer />
        </div>
    )
}