import React, { useEffect, useRef, useState } from 'react';
import Typed from "typed.js";

const TypeEffect = () => {
    const el = useRef(null);
    const [textBool, setTextBool] = useState(false)

    var textInner = ""
    const timeOut = () => {
        setTimeout(() => {
            let text = document.querySelector("#text");
            textInner = text.textContent

            if (textInner === "Translator" || textInner === "Content writer" || textInner === "Forward-thinker") {
                setTextBool(true)
            } else {
                setTextBool(false)
            }
            timeOut()
        }, 300);
    }

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Translator", "Content writer", "Forward-thinker"],
            startDelay: 300,
            typeSpeed: 80,
            backSpeed: 60,
            backDelay: 2000,
            smartBackspace: true,
            loop: true,
            showCursor: true,
        });

        return () => { typed.destroy(); };
    }, []);

    timeOut()

    console.log(textInner);
    return (
        <h1>
            <span ref={el} id='text' className={textBool ? 'dot' : 'no-dot'}></span>
        </h1>
    );
}

export default TypeEffect