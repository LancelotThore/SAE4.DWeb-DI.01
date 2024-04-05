import { fetchMovie } from "../lib/loaders";
import { useLoaderData } from 'react-router-dom';
import { ArrowLeft } from "../ui/Icons";
import { Link } from 'react-router-dom';

export async function loader({ id }) {
    return await fetchMovie({ id: id });
}

export default function WatchMovie() {
    const data = useLoaderData();

    return (
        <>
            <Link className="absolute top-14 left-5 text-forground z-40" to={`/film/${data.id}`}><ArrowLeft className="w-10 h-10" /></Link>
            <iframe className="w-screen h-screen" style={{border: "none"}} src={`https://www.youtube-nocookie.com/embed/${data.video}?rel=0`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </>
    )
}