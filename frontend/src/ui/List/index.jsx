import { useState, useEffect, useRef, useCallback } from 'react';
import Card from "./Card";
import { Link } from 'react-router-dom';
import { BtnArrowLeft, BtnArrowRight } from '../Icons';

const MovieCard = ({ movie }) => (
    <li className="w-32 h-44 md:w-40 md:h-52 relative">
        <Link to={`/film/${movie.id}`}><Card data={movie} /></Link>
    </li>
);

export default function List({ cat }) {
    const [isOverflowing, setIsOverflowing] = useState(false);
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);
    const listRef = useRef(null);

    const checkOverflow = useCallback(() => {
        if (listRef.current) {
            setIsOverflowing(listRef.current.scrollWidth > listRef.current.clientWidth);
            setAtEnd(listRef.current.scrollWidth - listRef.current.scrollLeft === listRef.current.clientWidth);
        }
    }, []);

    useEffect(() => {
        checkOverflow();
        window.addEventListener('resize', checkOverflow);

        return () => {
            window.removeEventListener('resize', checkOverflow);
        };
    }, [checkOverflow]);

    const handleNext = useCallback(() => {
        if (listRef.current) {
            listRef.current.scrollTo({
                left: listRef.current.scrollLeft + listRef.current.offsetWidth,
                behavior: 'smooth'
            });
            setAtStart(false);
            setAtEnd(listRef.current.scrollWidth - (listRef.current.scrollLeft + listRef.current.offsetWidth) <= listRef.current.clientWidth);
        }
    }, []);

    const handlePrev = useCallback(() => {
        if (listRef.current) {
            listRef.current.scrollTo({
                left: listRef.current.scrollLeft - listRef.current.offsetWidth,
                behavior: 'smooth'
            });
            setAtEnd(false);
            setAtStart(listRef.current.scrollLeft - listRef.current.offsetWidth <= 0);
        }
    }, []);

    return (
        <li className="my-3 mx-7 relative">
            <p className="pb-2">{cat.name}</p>
            <div className="flex overflow-hidden" ref={listRef}>
                <ul className="flex gap-2 flex-nowrap">
                    {cat.movies.map((movie, index) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </ul>
            </div>
            {isOverflowing && !atStart && <BtnArrowLeft className='absolute top-1/2 left-0 transform w-12 text-navBackground' onClick={handlePrev} />}
            {isOverflowing && !atEnd && <BtnArrowRight className='absolute top-1/2 right-0 transform w-12 text-navBackground' onClick={handleNext} />}
        </li>
    );
}