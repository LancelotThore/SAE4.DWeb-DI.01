import { Await, defer, useLoaderData } from "react-router-dom";
import Teams from '../ui/Team';
import Testimonial from '../ui/Testimonial';
import TeamSkeleton from '../ui/Team/TeamSkeleton';
import { fetchOurTeams, fetchTestimonialData } from "../lib/loaders";
import { Suspense } from 'react';

export async function loader({params}) {
    let teamData = fetchOurTeams(params.teamName);
    let testimonialData = await fetchTestimonialData(params.teamName);
    return defer({ team: teamData, testimonial: testimonialData });
}

export default function OurTeams() {
    
    const data = useLoaderData();

    return (
        <>
            <section>
                <Suspense fallback={<TeamSkeleton />}>
                    <Await resolve={data.team} errorElement={<div>Failed to load team data</div>}>
                        {teamData => <Teams {...teamData}/>}
                    </Await>
                </Suspense>
                
                <Testimonial data={data.testimonial}/>
            </section>
        </>
    );
}

function Loading() {
    return <h2>Chargement...</h2>;
}