'use client';

import React, { useState, useEffect, useRef } from 'react';

interface StatCounterProps {
    end: number;
    duration?: number; // duration in ms
    suffix?: string;
    prefix?: string;
}

export const StatCounter: React.FC<StatCounterProps> = ({ end, duration = 2000, suffix = '', prefix = '' }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const countRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Small delay to ensure user sees the start of animation
                    setTimeout(() => {
                        setIsVisible(true);
                    }, 200);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 } // Ensure 50% of the element is visible
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }, [isVisible, end, duration]);

    return (
        <span ref={countRef}>
            {prefix}{count}{suffix}
        </span>
    );
};
