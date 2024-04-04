import Card from "./Card";
import { Link } from 'react-router-dom';
import ScrollableList from "./ScrollableList";

const MovieCard = ({ movie }) => (
    <li className="w-32 h-44 md:w-40 md:h-52 relative">
        <Link to={`/film/${movie.id}`}><Card data={movie} /></Link>
    </li>
);

function List({ cat }) {
    return (
        <ScrollableList
            items={cat.movies}
            renderItem={movie => <MovieCard key={movie.id} movie={movie} />}
            className="my-3 mx-7 relative"
        />
    );
}

function ListResult({ results }) {
    return (
        <ScrollableList
            items={results}
            renderItem={movie => <MovieCard key={movie.id} movie={movie} />}
            className="mt-10 mx-0 p-3.5 relative"
        />
    );
}

function ListCat({ cats }) {
    return (
        <ScrollableList
            items={cats.movies}
            renderItem={cat => <MovieCard key={cat.id} movie={cat} />}
            className="mt-3 mx-7 relative"
        />
    );
}

export { List, ListResult, ListCat };