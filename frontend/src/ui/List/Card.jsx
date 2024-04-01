import { Link } from "react-router-dom";

export default function Card(data) {
    return (
        <>
            <Link to={`/${data.id}`} className="">
                <img className="m-1 rounded hover:border-4 hover:border-border" src={`/uploads/${data.image}`} alt="" />
            </Link>
        </>
    );
}