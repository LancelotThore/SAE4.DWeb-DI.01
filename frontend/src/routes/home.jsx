import { fetchMovies } from "../lib/loaders";
import Header from "../ui/Header";
import List from "../ui/List";
import { useLoaderData } from 'react-router-dom';

export async function loader() {
    return await fetchMovies();
}

export default function Home() {
    const data = useLoaderData();

    return (
        <>
            <Header />
            <List movies={data}/>
        </>
    )
}