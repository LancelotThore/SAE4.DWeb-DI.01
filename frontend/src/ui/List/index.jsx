import { useEffect, useState } from 'react';
import Card from "./Card";

export async function loader() {
    let response = await fetch("http://localhost:8080/api/movie/");
    let data = await response.json();
    return data;
}

export default function List(props) {
    return (
        <section>
            <p>A ne pas manquer</p>
            <ul className="flex gap-1 flex-wrap">
                {movies.map(movie => (
                    <li className="w-32" key={movie.id}>
                        <Card data={movie} />
                    </li>
                ))}
            </ul>
        </section>
    );
}