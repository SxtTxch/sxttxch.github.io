import './WebDevStack.css';
import Firebase from '../assets/firebase.svg';
import MySQL from '../assets/mysql.svg';
import Joomla from '../assets/joomla.svg';
import Wordpress from '../assets/wordpress.svg';
import Nodejs from '../assets/nodejs.svg';
import Google from '../assets/google.svg';

import { useEffect, useState, useRef, useCallback } from 'react';

export default function WebDevStack() {
    const [pathData, setPathData] = useState("");
    const containerRef = useRef(null);
    const loadedImagesCount = useRef(0);
    const totalImages = 6;

    const setupWebDevStack = useCallback(() => {
        const container = containerRef.current;
        const webdevstack = document.querySelector('#webdevstack');
        if (!container || !webdevstack || webdevstack.children.length === 0) return;

        const containerRect = container.getBoundingClientRect();

        const stackPosData = Array.from(webdevstack.children).map((child) => {
            const rect = child.getBoundingClientRect();
            return {
                x: (rect.left + rect.width / 2) - containerRect.left,
                y: (rect.top + rect.height / 2) - containerRect.top
            };
        });

        stackPosData.sort((a, b) => a.x - b.x);

        let currentPathData = `M ${stackPosData[0].x} ${stackPosData[0].y} `;
        for (let i = 1; i < stackPosData.length; i++) {
            currentPathData += `H ${stackPosData[i].x} `;
            currentPathData += `V ${stackPosData[i].y} `;
        }
        setPathData(currentPathData);
    }, []);

    function handleImageLoad() {
        loadedImagesCount.current += 1;
        if (loadedImagesCount.current >= totalImages) {
            requestAnimationFrame(setupWebDevStack);
        }
    }

    useEffect(() => {
        setupWebDevStack();

        window.addEventListener('resize', setupWebDevStack);
        window.addEventListener('scroll', setupWebDevStack);

        return () => {
            window.removeEventListener('resize', setupWebDevStack);
            window.removeEventListener('scroll', setupWebDevStack);
        };
    }, [setupWebDevStack]);

    return (
        <div ref={containerRef} style={{ position: 'relative', width: '100%' }}>
            <svg>
                <path d={pathData} stroke="black" fill="none" strokeWidth="2" />
            </svg>
            <div id="webdevstack">
                <img src={Firebase} className="pointer" onLoad={handleImageLoad} alt="Firebase" />
                <img src={MySQL} className="pointer" onLoad={handleImageLoad} alt="MySQL" />
                <img src={Joomla} className="pointer" onLoad={handleImageLoad} alt="Joomla" />
                <img src={Wordpress} className="pointer" onLoad={handleImageLoad} alt="WordPress" />
                <img src={Nodejs} className="pointer" onLoad={handleImageLoad} alt="Node.js" />
                <img src={Google} className="pointer" onLoad={handleImageLoad} alt="Google" />
            </div>
        </div>
    );
}
