import { useState } from 'react';

function HomeButton({ color, fill, ...props }) {

    return (
        <svg dataslot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" {...props}>
            <path
                // fill={color ? "#fff" : "#b1b2b6"}
                fill="currentColor"
                fillRule="evenodd"
                d="M41 19.8L21 3 1 19.8l2 2.3 3.6-3v15.6c0 2.4 2 4.3 4.4 4.3h20.2c2.4 0 4.3-1.9 4.4-4.3V19.1l3.6 3 1.8-2.3zm-8.6 14.8c0 .7-.6 1.4-1.4 1.4h-6.9v-9h-6.3v9h-6.9c-.7 0-1.4-.6-1.4-1.3V16.6L21 7l11.4 9.6v18z"
                clipRule="evenodd"
            >
            </path>
        </svg>
    );
}

function DirectButton({ color, ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}
        >
            <path
                fill='currentColor'
                fillRule="evenodd"
                d="M19.703 4.284c4.396 4.261 4.396 11.17 0 15.433a1.02 1.02 0 01-1.41 0 .946.946 0 010-1.368 8.786 8.786 0 000-12.698.947.947 0 010-1.368 1.02 1.02 0 011.41 0v.001zm-13.995 0c.39.377.39.99 0 1.367a8.786 8.786 0 000 12.698c.39.378.39.99 0 1.368a1.02 1.02 0 01-1.41 0C-.1 15.455-.1 8.545 4.298 4.283a1.02 1.02 0 011.41 0v.001zm11.07 3.012a7.204 7.204 0 010 10.408 1.064 1.064 0 01-1.473 0 .99.99 0 010-1.429 5.227 5.227 0 000-7.55.989.989 0 010-1.429 1.063 1.063 0 011.472 0h.001zm-8.083 0a.99.99 0 010 1.428 5.227 5.227 0 000 7.552.989.989 0 010 1.428 1.063 1.063 0 01-1.472 0 7.204 7.204 0 010-10.408 1.063 1.063 0 011.472 0zM12 10a2 2 0 110 4 2 2 0 010-4z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}

function Catalogue({ color, ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" {...props}>
            <path
                fill='currentColor'
                fillRule="evenodd"
                d="M36.3 39H5.7c-2 0-3.7-1.7-3.7-3.7V17.7c0-2 1.7-3.7 3.7-3.7h30.5c2.1 0 3.7 1.7 3.7 3.7v17.6c.1 2-1.6 3.7-3.6 3.7zM5.7 17c-.4 0-.7.3-.7.7v17.6c0 .4.3.7.7.7h30.5c.4 0 .7-.3.7-.7V17.7c0-.4-.3-.7-.7-.7H5.7zm12.2 15V21l9 5.5-9 5.5zM9 8h24c1.7 0 3 1.3 3 3H6c0-1.7 1.3-3 3-3zm6-6h12c1.7 0 3 1.3 3 3H12c0-1.7 1.3-3 3-3z"
            ></path>
        </svg>
    );
}

function Search({ color, ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" {...props}>
            <path
                fill='currentColor'
                d="M35.3 39.4l-9.1-9.1c-2.3 1.9-5.3 3-8.5 3-7.5 0-13.6-6.1-13.6-13.6S10.2 6.1 17.7 6.1s13.6 6.1 13.6 13.6c0 3.2-1.1 6.2-3 8.5l9.1 9.1-2.1 2.1zM17.7 9.2c-5.8 0-10.6 4.7-10.6 10.6 0 5.8 4.7 10.6 10.6 10.6 5.8 0 10.6-4.7 10.6-10.6 0-5.9-4.7-10.6-10.6-10.6z"
            ></path>
        </svg>
    );
}

function Other({ color, ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" {...props}>
            <path
                fill='currentColor'
                d="M38 32.5H4v-3h34v3zm0-10H4v-3h34v3zm0-10H4v-3h34v3z"
            ></path>
        </svg>
    );
}

export { HomeButton, DirectButton, Catalogue, Search, Other };