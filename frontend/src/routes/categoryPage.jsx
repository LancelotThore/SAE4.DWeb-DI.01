import { useLoaderData } from 'react-router-dom';
import { fetchCategory } from "../lib/loaders";
import { ListCat, ListResult } from '../ui/List';

export async function loader({ id }) {
    return await fetchCategory({ id: id });
}

export default function CategoryPage() {
    const category = useLoaderData();
    return (
        <>
            <h1>{category.name}</h1>
            <ListCat category={category} />
        </>
    )
}