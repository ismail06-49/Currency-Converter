import { useEffect, useState } from "react";
import data from '../../data/currency.json';
import Freecurrencyapi from '@everapi/freecurrencyapi-js';

export default function Hero() {

    const [currency, setCurrency] = useState([]);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [amount, setAmount] = useState(1);
    const [result, setResult] = useState('');
    
    useEffect(() => {
        setCurrency(data);
    }, []);

    function getResult(e) {
        e.preventDefault(); // Prevent the default form submission behavior

        const freecurrencyapi = new Freecurrencyapi('fca_live_gsGvGEqufVYt7TlK77icGV09lxHSJiTVIT9UCtON');

        freecurrencyapi.latest({
            base_currency: fromCurrency,
            currencies: toCurrency
        }).then(response => {
            const rate = response.data[toCurrency]; // Assuming the response contains the conversion rate
            const convertedAmount = amount * rate; // Calculate the converted amount
            setResult(convertedAmount); // Set the result
        }).catch(error => {
            console.error("Error fetching conversion rate:", error);
        });
    }
    
    

    return (
        <div className="section">
            <div className="hero">
                <h1 className="title">Currency Converter</h1>
                <p className="description">
                    Convert your money easily and quickly with our Currency Converter. Select the currencies you want to exchange, enter the amount, and get real-time conversion rates. Whether you&apos;re traveling abroad or managing international transactions, our tool simplifies the process for you.
                </p>
            </div>
            <form onSubmit={getResult} className="form">
                <div className="my-3">
                    <input className="input-number" onChange={(e) => setAmount(e.target.value)} placeholder="Your Amount" type="numper" />
                </div>
                <div className="my-3">
                    <select className="select cursor-pointer" id="from" value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)} >
                        {
                            currency && currency.map((item, index) => {
                                return (
                                    <option key={index} value={item.code}>{item.name}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="my-3">
                    <select className="select cursor-pointer" id="to" value={toCurrency} onChange={(e) => setToCurrency(e.target.value)} >
                        {
                            currency && currency.map((item, index) => {
                                return (
                                    <option key={index} value={item.code}>{item.name}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="result">
                    <p>
                        Converted Amount {result && result.toFixed(2)} {toCurrency}
                    </p>
                </div>
                <button className="py-3 px-4 w-1/2 mx-auto block bg-blue-500 hover:bg-blue-700 text-white rounded-2xl text-lg">Convert</button>
            </form>
        </div>
    )
}