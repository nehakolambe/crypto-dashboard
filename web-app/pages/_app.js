import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import 'bootstrap-icons/font/bootstrap-icons.css';

import '../styles/globals.css';

// Create a new QueryClient instance for managing API requests and caching
const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }) {
    return (
        <QueryClientProvider client={queryClient}>
            { }
            <Component {...pageProps} />
        </QueryClientProvider>
    );
}
