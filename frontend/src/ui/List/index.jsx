import { useState } from 'react';
import Card from "./Card";
import Info from './Info';

export default function List({movies=[]}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    function goToLeft() {
        setCurrentIndex(oldIndex => oldIndex === 0 ? movies.length - 1 : oldIndex - 1);
    }

    function goToRight() {
        setCurrentIndex(oldIndex => oldIndex === movies.length - 1 ? 0 : oldIndex + 1);
    }

    return (
        <section className="my-3 mx-7">
            <p className="pb-2">A ne pas manquer</p>
            <Info />
            <div className="flex overflow-x-scroll hide-scrollbar">
                <ul className="flex gap-2 flex-nowrap">
                    {movies.map((movie, index) => (
                        <li className="w-32 h-44 md:w-40 md:h-52 relative" key={movie.id}>
                            <Card data={movie} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}