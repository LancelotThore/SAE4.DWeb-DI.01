import { Link } from "react-router-dom";

export default function Card({ movie }) {
    return (
        <li className="w-32 h-44 md:w-40 md:h-52 relative group">
            <Link to={`/film/${movie.id}`}>
                <img className="h-full w-full object-cover rounded" src={`/affiches/${movie.image}`} alt={movie.name} />
                <div className="absolute w-full h-full hover:border-4 hover:border-border top-0 rounded">
                    <p className="absolute w-6 h-6 bg-border z-30 text-center right-0 m-2 rounded-full text-openNavBackground opacity-0 group-hover:opacity-100">i</p>
                </div>
            </Link>
        </li>
    );
}