"use client";

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

interface CounterProps {
    value: string | number;
    duration?: number;
    className?: string;
}

const Counter: React.FC<CounterProps> = ({ value, duration = 2, className = "" }) => {
    const [displayValue, setDisplayValue] = useState("0");
    const containerRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const valStr = String(value);
        const match = valStr.match(/(\d+)(.*)/);

        if (!match) {
            setDisplayValue(valStr);
            return;
        }

        const targetNumber = parseInt(match[1], 10);
        const suffix = match[2] || "";
        const obj = { count: 0 };

        const anim = gsap.to(obj, {
            count: targetNumber,
            duration: duration,
            ease: "power2.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 90%",
                toggleActions: "play none none none"
            },
            onUpdate: () => {
                setDisplayValue(Math.floor(obj.count) + suffix);
            }
        });

        return () => {
            anim.kill();
        };
    }, [value, duration]);

    return (
        <span ref={containerRef} className={className}>
            {displayValue}
        </span>
    );
};

export default Counter;
