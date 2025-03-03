---
title: API Integration
sidebar_position: 2
---
# API Integration

## Overview. 

In this project, data is fetched and updated using the CoinGecko API, which provides real-time cryptocurrency data. The data fetching is handled using the Axios library in combination with React Query for optimal performance and caching benefits.

## Fetching Data

The `fetchCryptos` function utilizes Axios to send a GET request to the CoinGecko API. The parameters specify that we want the cryptocurrency data for certain currencies in USD. This function is designed to be asynchronous to handle the API response as it comes, ensuring the UI does not freeze or hang while waiting for data.

## Error Handling

Error handling is implemented using a try-catch block within the `fetchCryptos` function. If an error occurs during the API call, it logs the error message and throws a new error to be handled by the calling component, displaying an appropriate message to the user.

## Usage in Components

The `Dashboard` component uses the `useQuery` hook from React Query to call `fetchCryptos`. This hook manages the API call's asynchronous nature, including loading states, caching the data for set intervals, and retrying failed requests automatically.

## Caching and Stale Data Handling

React Query is configured to cache the data for 10 minutes and considers the data stale after 5 minutes. This setup reduces the number of API calls made, thus saving bandwidth and improving the user experience by providing faster load times.

## Conclusion

The integration of the CoinGecko API using Axios and React Query provides a robust solution for fetching and managing cryptocurrency data, ensuring the application remains responsive and up to date with minimal server load.
