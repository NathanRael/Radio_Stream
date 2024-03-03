import { useRef, useEffect, useState } from "react";


const UseIntersection = (options) => {
    const containerRef = useRef(null);
    const [isVisible,setIsVisible] = useState(false);
    const callbackFunction = (entries) => {
        const [ entry ] = entries;
        setIsVisible(entry.isIntersecting);
    }

    // const options = {
    //     root : null,
    //     rootMargin : '0px',
    //     threshold: 1.0,
    // }

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options);
        if (containerRef.current) observer.observe(containerRef.current);

        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current);
        }
    }, [containerRef, options])

    return [containerRef, isVisible]
}

export default UseIntersection