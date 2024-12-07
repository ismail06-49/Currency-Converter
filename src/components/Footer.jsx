import { Link } from 'react-router-dom';

export default function Footer() {
    
    return (
        <footer className=" rounded-lg shadow bg-gradient-to-tr from-slate-50 to-zinc-500 mx-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">CurrencyConverter</span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                        <li>
                            <Link to="/about" className="hover:underline me-4 md:me-6">About</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:underline me-4 md:me-6">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center">© 2024 <Link to='https://github.com/ismail06-49' className="hover:underline">Ismail Haddad</Link>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}