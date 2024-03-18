import Pricing from '../ui/Pricing';
import { useLoaderData } from 'react-router-dom';
import { fetchPricingData } from '../lib/loaders';

export async function loader() {
    return await fetchPricingData();
}

export default function Buy() {
    const data = useLoaderData();
    return (
        <>
            <Pricing {...data} />
            {/* <Pricing title={data.title} description={data.description} plans={data.plans} /> */}
        </>
    );
}