import { fetchCategories, fetchMovie } from "../lib/loaders";
import Header from "../ui/Header";
import { List } from "../ui/List";
import { useLoaderData } from 'react-router-dom';

export async function loader() {
    const categories = await fetchCategories();
    const movie = await fetchMovie({id: 2});

    return { categories, movie };
}

export default function Home() {
    const { categories, movie } = useLoaderData();

    return (
        <>
            <Header data={movie} />
            <ul className="mt-10">
                {categories.map((cat) => (
                    <List key={cat.id} cat={cat} />
                ))}
            </ul>
        </>
    )
}