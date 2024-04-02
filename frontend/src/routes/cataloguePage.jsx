import { fetchCategoriesName } from "../lib/loaders";
import { useLoaderData } from 'react-router-dom';

export async function loader() {
    return await fetchCategoriesName();
}

export default function CataloguePage() {
    const data = useLoaderData();
    console.log(data);
    return (
        <div className="mt-20">
            <h1>Découvrez le contenu du catalogue</h1>
            <ul className="grid grid-cols-2 gap-5 p-0 mt-6">
                {data.map((cat) => (
                    <li key={cat.id}>{cat.name}</li>
                ))}
            </ul>
        </div>
    )
}