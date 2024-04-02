import Card from "./Card";
import { Link } from 'react-router-dom';

export default function List({cat}) {

    return (
        <li className="my-3 mx-7">
            <p className="pb-2">{cat.name}</p>
            <div className="flex overflow-x-scroll hide-scrollbar">
                <ul className="flex gap-2 flex-nowrap">
                    {cat.movies.map((movie, index) => (
                        <li className="w-32 h-44 md:w-40 md:h-52 relative" key={movie.id}>
                            <Link to={`/${movie.id}`}><Card data={movie}/></Link>
                        </li>
                    ))}
                </ul>
            </div>
        </li>
    );
}