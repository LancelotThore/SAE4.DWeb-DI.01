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
            <h1  className='text-center pt-20 pb-5 font-bold text-base'>{category.name}</h1>
            <ul className=''>
                <ListCat cats={category} />
            </ul>
        </>
    )
}