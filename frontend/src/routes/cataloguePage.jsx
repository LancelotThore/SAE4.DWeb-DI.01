import { fetchCategoriesName } from "../lib/loaders";
import { useLoaderData, Link } from 'react-router-dom';

export async function loader() {
    return await fetchCategoriesName();
}

export default function CataloguePage() {
    const data = useLoaderData();

    return (
        <div className="mt-20 mx-3.5">
            <h1>Découvrez le contenu du catalogue</h1>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 p-0 mt-6">
                {data.map((cat) => (
                    <li className="h-28 w-full rounded bg-cover bg-no-repeat" style={{ backgroundImage: `url(/bg_category/${cat.image})` }} key={cat.id}>
                        <Link className="flex items-center justify-center w-full h-full relative" to={`/category/${cat.id}`}>
                            <p className="text-center font-bold">{cat.name}</p>
                            <div className="absolute w-full h-full hover:border-4 hover:border-border top-0 rounded"></div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}