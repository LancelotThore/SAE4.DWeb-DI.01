import { fetchCategories } from "../lib/loaders";
import Header from "../ui/Header";
import List from "../ui/List";
import { useLoaderData } from 'react-router-dom';

export async function loader() {
    return await fetchCategories();
}

export default function Home() {
    const data = useLoaderData();

    return (
        <>
            <Header />
            <ul>
                {data.map((cat, index) => (
                    <List key={cat.id} cat={cat} />
                ))}
            </ul>
        </>
    )
}