import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// Function to fetch cryptocurrency data from the CoinGecko API
const fetchCryptos = async () => {
    try {
        const { data } = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
            params: {
                vs_currency: 'usd',
                ids: 'bitcoin,ethereum,ripple,cardano,maker' //dogecoin
            }
        });
        return data;
    } catch (error) {
        console.error("Error fetching cryptocurrency data:", error.message);
        throw new Error("Failed to fetch data. Please try again later.");
    }
};

const Dashboard = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const { data: cryptos, isFetching, refetch, error } = useQuery({
        queryKey: ['cryptoData'],
        queryFn: fetchCryptos,
        staleTime: 300000,  // Data freshness duration (5 minutes)
        cacheTime: 600000,  // Data cache duration (10 minutes)
        retry: 2, // Retry the request twice if it fails
        refetchOnWindowFocus: false, // Prevent auto-refreshing on window focus
    });

    const filteredCryptos = cryptos?.filter(crypto =>
        crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h1>Cryptocurrency Prices</h1>
                <div onClick={() => !isFetching && refetch()} style={{ cursor: 'pointer' }}>
                    {isFetching ? (
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ) : (
                        <i className="bi bi-arrow-clockwise" style={{ fontSize: '24px' }}></i>
                    )}
                </div>
            </div>

            {/* Error Handling Display */}
            {error && <div className="alert alert-danger">⚠ {error.message}</div>}

            {/* Responsive Search Bar */}
            <div className="search-bar">
                <input
                    type="text"
                    className="form-control search-input"
                    placeholder="Search for a cryptocurrency..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Display Cryptos or Loading Indicator */}
            {isFetching && <p className="text-center text-info">Fetching latest prices...</p>}
            <div className="crypto-grid">
                {!isFetching && filteredCryptos?.map(crypto => (
                    <div key={crypto.id} className="crypto-card">
                        <h2 className="crypto-name">{crypto.name}</h2>
                        <p className="crypto-price">${crypto.current_price.toFixed(2)}</p>
                        <div className="crypto-info">
                            <span className={`change ${crypto.price_change_percentage_24h < 0 ? 'negative' : 'positive'}`}>
                                {crypto.price_change_percentage_24h < 0 ? '▼' : '▲'} {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
