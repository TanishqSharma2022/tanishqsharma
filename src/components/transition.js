import React from 'react';
import { motion } from 'framer-motion';

const transition = (OgComponent) => {
    const TransitionComponent = () => (
        <>
            <OgComponent />
            <motion.div            
                className='slide-in'
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />

            <motion.div            
                className='slide-out'
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
        </>
    );

    // Set the display name for the component
    TransitionComponent.displayName = `Transition(${OgComponent.displayName || OgComponent.name || 'Component'})`;

    return TransitionComponent;
};

export default transition;
