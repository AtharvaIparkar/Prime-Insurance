'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
    children: React.ReactNode;
    animation?: 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'scale-up';
    delay?: number;
    duration?: number;
    threshold?: number;
    className?: string;
    once?: boolean;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    animation = 'fade',
    delay = 0,
    duration = 700,
    threshold = 0.1,
    className = '',
    once = true,
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (once && ref.current) {
                        observer.unobserve(ref.current);
                    }
                } else {
                    if (!once) {
                        setIsVisible(false);
                    }
                }
            },
            { threshold }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold, once]);

    const getAnimationStyles = () => {
        const hidden = {
            fade: 'opacity-0',
            'slide-up': 'opacity-0 translate-y-12',
            'slide-down': 'opacity-0 -translate-y-12',
            'slide-left': 'opacity-0 translate-x-12',
            'slide-right': 'opacity-0 -translate-x-12',
            'scale-up': 'opacity-0 scale-95',
        }[animation];

        const visible = {
            fade: 'opacity-100',
            'slide-up': 'opacity-100 translate-y-0',
            'slide-down': 'opacity-100 translate-y-0',
            'slide-left': 'opacity-100 translate-x-0',
            'slide-right': 'opacity-100 translate-x-0',
            'scale-up': 'opacity-100 scale-100',
        }[animation];

        return isVisible ? visible : hidden;
    };

    return (
        <div
            ref={ref}
            className={`transition-all duration-${duration} ease-out ${getAnimationStyles()} ${className}`}
            style={{
                transitionDelay: `${delay}ms`,
                transitionDuration: `${duration}ms`
            }}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
