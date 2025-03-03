import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [cryptos, setCryptos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
                    params: {
                        vs_currency: 'usd',
                        ids: 'bitcoin,ethereum,ripple,cardano,dogecoin'
                    }
                });
                setCryptos(data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredCryptos = cryptos.filter(crypto =>
        crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1>Cryptocurrency Prices</h1>
            <input 
                type="text" 
                placeholder="Search for a cryptocurrency..."
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <ul>
                {filteredCryptos.map(crypto => (
                    <li key={crypto.id}>
                        {crypto.name}: ${crypto.current_price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
