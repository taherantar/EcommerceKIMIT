import React, { useState } from "react";
import { Card, Image } from "react-bootstrap";
const HoverCard = () => {
    const [showHoverCard, setShowHoverCard] = useState(true);
    const handleMouseEnter = () => {
        setShowHoverCard(true);
    };
    const handleMouseLeave = () => {
        setShowHoverCard(false);
    };
    return (
        <Card onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Card.Body>
                <Image src="https://i.dummyjson.com/data/products/8/thumbnail.jpg"/>
            </Card.Body>
        </Card>
    );
};
export default HoverCard;