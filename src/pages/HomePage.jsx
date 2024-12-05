import NavBar from "../components/NavBar"
// import Freecurrencyapi from '@everapi/freecurrencyapi-js';

export default function HomePage() {
    
    // const freecurrencyapi = new Freecurrencyapi('fca_live_gsGvGEqufVYt7TlK77icGV09lxHSJiTVIT9UCtON');

    // freecurrencyapi.latest({
    //     base_currency: 'USD',
    //     currencies: 'EUR'
    // }).then(response => {
    //     console.log(response);
    // });

    return (
        <div className="home">
            <NavBar />
        </div>
    )
}