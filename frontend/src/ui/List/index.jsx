import React, { useState, useRef, useCallback, useEffect } from 'react';
import Card from "./Card";
import ScrollableList from "./ScrollableList";
import { BtnArrowLeft, BtnArrowRight } from '../Icons';

function ListResult({ results }) {
    return (
        <ScrollableList
            items={results}
            renderItem={movie => <Card key={movie.id} movie={movie} />}
            className="mt-10 mx-0 p-3.5 relative"
        />
    );
}

function ListCat({ cats }) {
    return (
        <ScrollableList
            items={cats.movies}
            renderItem={cat => <Card key={cat.id} movie={cat} />}
            className="mt-3 mx-7 relative"
        />
    );
}

function List({ cat }) {
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
                    {cat.movies.map((movie) => (
                        <Card key={movie.id} movie={movie} />
                    ))}
                </ul>
            </div>
            {isOverflowing && !atStart && <BtnArrowLeft className='absolute top-1/2 left-0 transform w-12 text-navBackground cursor-pointer' onClick={handlePrev} />}
            {isOverflowing && !atEnd && <BtnArrowRight className='absolute top-1/2 right-0 transform w-12 text-navBackground cursor-pointer' onClick={handleNext} />}
        </li>
    );
}

export { ListResult, ListCat, List };