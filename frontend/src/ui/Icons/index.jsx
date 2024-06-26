import { useState } from 'react';

function HomeButton({ fill, ...props }) {
    return (
        <svg dataslot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" {...props}>
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M41 19.8L21 3 1 19.8l2 2.3 3.6-3v15.6c0 2.4 2 4.3 4.4 4.3h20.2c2.4 0 4.3-1.9 4.4-4.3V19.1l3.6 3 1.8-2.3zm-8.6 14.8c0 .7-.6 1.4-1.4 1.4h-6.9v-9h-6.3v9h-6.9c-.7 0-1.4-.6-1.4-1.3V16.6L21 7l11.4 9.6v18z"
                clipRule="evenodd"
            >
            </path>
        </svg>
    );
}

function DirectButton({ ...props }) {
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

function Catalogue({ ...props }) {
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

function Search({ ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" {...props}>
            <path
                fill='currentColor'
                d="M35.3 39.4l-9.1-9.1c-2.3 1.9-5.3 3-8.5 3-7.5 0-13.6-6.1-13.6-13.6S10.2 6.1 17.7 6.1s13.6 6.1 13.6 13.6c0 3.2-1.1 6.2-3 8.5l9.1 9.1-2.1 2.1zM17.7 9.2c-5.8 0-10.6 4.7-10.6 10.6 0 5.8 4.7 10.6 10.6 10.6 5.8 0 10.6-4.7 10.6-10.6 0-5.9-4.7-10.6-10.6-10.6z"
            ></path>
        </svg>
    );
}

function Other({ ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" {...props}>
            <path
                fill='currentColor'
                d="M38 32.5H4v-3h34v3zm0-10H4v-3h34v3zm0-10H4v-3h34v3z"
            ></path>
        </svg>
    );
}

function Burger({ ...props }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            {...props}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M4 4a1 1 0 000 2h12a1 1 0 100-2H4zm-1 8a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm9 8H4a1 1 0 110-2h8a1 1 0 110 2z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}

function Cross({ ...props }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path fill='currentColor' d="M5.3 18.7c.2.2.4.3.7.3s.5-.1.7-.3l5.3-5.3 5.3 5.3c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L13.4 12l5.3-5.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L12 10.6 6.7 5.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l5.3 5.3-5.3 5.3c-.4.4-.4 1 0 1.4z"></path>
        </svg>
    );
}

function LogoX({ ...props }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 271"
            {...props}
        >
            <path fill='currentColor' d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z" />
        </svg>
    );
}

function LogoFacebook({ ...props }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-204.8 -341.333 1774.933 2047.999"
            {...props}
        >
            <path
                fill="currentColor"
                d="M1365.333 682.667C1365.333 305.64 1059.693 0 682.667 0 305.64 0 0 305.64 0 682.667c0 340.738 249.641 623.16 576 674.373V880H402.667V682.667H576v-150.4c0-171.094 101.917-265.6 257.853-265.6 74.69 0 152.814 13.333 152.814 13.333v168h-86.083c-84.804 0-111.25 52.623-111.25 106.61v128.057h189.333L948.4 880H789.333v477.04c326.359-51.213 576-333.635 576-674.373"
            ></path>
            <path
                fill="transparent"
                d="M948.4 880l30.267-197.333H789.333V554.609C789.333 500.623 815.78 448 900.584 448h86.083V280s-78.124-13.333-152.814-13.333c-155.936 0-257.853 94.506-257.853 265.6v150.4H402.667V880H576v477.04a687.805 687.805 0 00106.667 8.293c36.288 0 71.91-2.84 106.666-8.293V880H948.4"
            ></path>
        </svg>
    );
}

function ArrowRight({ ...props }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            {...props}
        >
            <path
                fill="currentColor"
                d="M18.553 11.776L6.158 5.58A.8.8 0 005 6.294v11.412a.8.8 0 001.158.715l12.395-6.197a.25.25 0 000-.448z"
            ></path>
        </svg>
    );
}

function ArrowLeft({ ...props }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            {...props}
        >
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M20 12H4m0 0l6-6m-6 6l6 6"
            ></path>
        </svg>
    );
}

function BtnArrowLeft({ ...props }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 800 800"
            {...props}
        >
            <circle cx="400" cy="400" r="400" fill="currentColor"></circle>
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="57"
                d="M487 225L312 400l175 175"
            ></path>
        </svg>
    );
}

function BtnArrowRight({ ...props }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 800 800"
            {...props}
        >
            <circle cx="400" cy="400" r="400" fill="currentColor" transform="matrix(-1 0 0 1 800 0)"></circle>
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="57"
                d="M313 225l175 175-175 175"
            ></path>
        </svg>
    );
}

function Plus({ ...props }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            {...props}
        >
            <path fill="transparent" d="M0 0H24V24H0z"></path>
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12M6 12h12"
            ></path>
        </svg>
    );
}

function Tick({ ...props }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 -0.5 25 25"
            {...props}
        >
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M5.5 12.5l4.667 4.5L19.5 8"
            ></path>
        </svg>
    );
}

function PageZoom({ ...props }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            version="1.1"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
            {...props}
        >
            <path d="M472.178 34.62H39.822C17.864 34.62 0 52.485 0 74.442v363.115c0 21.958 17.864 39.822 39.822 39.822h432.356c21.958 0 39.822-17.864 39.822-39.822V74.442c0-21.957-17.864-39.822-39.822-39.822zm5.689 402.937a5.695 5.695 0 01-5.689 5.689H39.822a5.695 5.695 0 01-5.689-5.689V153.839h443.733v283.718zm0-317.851H34.133V74.442a5.695 5.695 0 015.689-5.689h432.356a5.695 5.695 0 015.689 5.689v45.264z"></path>
            <circle cx="71.805" cy="94.231" r="12.836"></circle>
            <circle cx="112.959" cy="94.231" r="12.836"></circle>
            <circle cx="154.112" cy="94.231" r="12.836"></circle>
            <path d="M263.523 330.201l73.698 73.698c6.664 6.665 17.471 6.666 24.136 0 6.665-6.665 6.665-17.471 0-24.136l-73.698-73.698c18.695-29.706 15.142-69.506-10.702-95.348-29.991-29.992-78.791-29.991-108.783 0-29.992 29.991-29.992 78.791 0 108.783 25.645 25.644 65.364 29.57 95.349 10.701zm-71.213-95.348c16.684-16.683 43.827-16.683 60.512 0 16.683 16.683 16.683 43.828 0 60.51-16.683 16.683-43.828 16.683-60.512 0-16.684-16.681-16.684-43.828 0-60.51z"></path>
        </svg>
    );
}

export { HomeButton, DirectButton, Catalogue, Search, Other, Burger, Cross, LogoX, LogoFacebook, ArrowRight, ArrowLeft, BtnArrowLeft, BtnArrowRight, Plus, Tick, PageZoom };