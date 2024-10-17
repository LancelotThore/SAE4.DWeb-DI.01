import { fetchMovie } from "../lib/loaders";
import Header from "../ui/Header";
import { useLoaderData } from 'react-router-dom';

export async function loader({id}) {
    return await fetchMovie({id: id});
}

export default function MoviePage() {
    const movie = useLoaderData();

    return (
        <>
            <Header data={movie}/>
            <div>

            </div>
        </>
    )
}