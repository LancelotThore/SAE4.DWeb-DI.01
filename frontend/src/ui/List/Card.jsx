import { Link } from "react-router-dom";

export default function Card({ data }) {
    return (
        <>
            <Link to={`/${data.id}`} className="w-full h-full">
                <img className="h-full w-full object-cover rounded" src={`/affiches/${data.Image}`} alt={data.name} />
                <div className="absolute w-full h-full hover:border-4 hover:border-border top-0 rounded">
                    <p className="absolute w-6 h-6 bg-border invisible hover:visible z-30 text-center right-0 m-2 rounded-full text-openNavBackground">i</p>
                </div>
            </Link>
        </>
    );
}