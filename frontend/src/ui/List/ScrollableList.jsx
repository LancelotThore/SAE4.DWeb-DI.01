import React, { useState, useRef, useEffect, useCallback } from 'react';
import { BtnArrowLeft, BtnArrowRight } from '../Icons';

export default function ScrollableList({ items, renderItem, className }) {
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
        <div className={`mt-3 mx-7 relative ${className}`}>
            <div className='flex overflow-hidden' ref={listRef}>
                <ul className="flex gap-2 flex-nowrap">
                    {items.map(renderItem)}
                </ul>
            </div>
            {isOverflowing && !atStart && <BtnArrowLeft className='absolute top-1/2 left-0 transform w-12 text-navBackground -translate-y-1/2 cursor-pointer' onClick={handlePrev} />}
            {isOverflowing && !atEnd && <BtnArrowRight className='absolute top-1/2 right-0 transform w-12 text-navBackground -translate-y-1/2 cursor-pointer' onClick={handleNext} />}
        </div>
    );
};