import React, { useEffect, useRef } from 'react';
import Typed from "typed.js";

const TypeEffect = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Translator", "Content writer", "Forward-thinker"], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 300,
            typeSpeed: 80,
            backSpeed: 60,
            backDelay: 2000,
            smartBackspace: true,
            loop: true,
            showCursor: true,
        });

        // Destropying
        return () => {
        typed.destroy();
        };
    }, []);

    return (
        <h1>
            <span ref={el}></span>
        </h1>
    );
}

export default TypeEffect