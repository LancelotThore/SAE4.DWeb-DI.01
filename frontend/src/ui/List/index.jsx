import { useState } from 'react';
import Card from "./Card";
import Info from './Info';

export default function List({movies=[]}) {
    const [showInfo, setShowInfo] = useState(false);

    function handleCardClick() {
        setShowInfo(true);
    }

    return (
        <section className="my-3 mx-7">
            <p className="pb-2">A ne pas manquer</p>
            {showInfo && <Info />}
            <div className="flex overflow-x-scroll hide-scrollbar">
                <ul className="flex gap-2 flex-nowrap">
                    {movies.map((movie, index) => (
                        <li className="w-32 h-44 md:w-40 md:h-52 relative" onClick={handleCardClick} key={movie.id}>
                            <Card data={movie}/>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}