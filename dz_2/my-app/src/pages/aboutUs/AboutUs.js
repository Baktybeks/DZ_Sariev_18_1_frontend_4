import React from 'react';

function AboutUs(props) {
    return (
        <>
            <p>title: {props.aboutUs.title}</p>
            <p>subtitle: {props.aboutUs.subtitle}</p>
        </>
    );
}

export default AboutUs;