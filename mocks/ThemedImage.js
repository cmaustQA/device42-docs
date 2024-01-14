import React from 'react';

const ThemedImage = ({ src, alt, ...props }) => (
    <img src={src} alt={alt} {...props} />
);

export default ThemedImage;
