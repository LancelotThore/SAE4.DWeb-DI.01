import { Link } from "react-router-dom";

export default function Card() {
    return (
        <>
            <Link to="/VivaRai2!" className="">
                <img className="m-1 rounded hover:border-4 hover:border-border" src="/VivaRai2!.webp" alt="" />
            </Link>
        </>
    );
}