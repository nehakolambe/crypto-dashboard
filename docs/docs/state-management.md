---
title: State Management
sidebar_position: 3
---
# State Management

## Overview

This project utilizes React Query as the primary state management library for handling server-state. For local state management, it employs React's built-in `useState` hook. This combination provides a clear distinction between server and local state, enhancing maintainability and scalability.

## Why React Query

React Query offers several advantages for managing server-state:

- **Automatic Caching:** React Query caches the server responses and provides a seamless way to refresh data when it becomes stale.
- **Background Updates:** The library supports background data fetching and updating, which keeps the UI responsive and data up-to-date.
- **Error Handling:** Built-in mechanisms to handle loading and error states reduce boilerplate code and improve error resilience.

## Local State with useState

The `useState` hook is used to handle user input for searches within the cryptocurrency data. It allows the application to react instantly to user inputs and filter the data without additional API calls.

## Conclusion

Using React Query and `useState` provides a robust solution for managing both server and local states in the application. This setup not only makes the data fetching process efficient but also keeps the user interface reactive and user-friendly.
