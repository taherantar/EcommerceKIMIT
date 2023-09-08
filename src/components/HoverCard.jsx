import React, { useState } from "react";
import { Card, Image } from "react-bootstrap";
const HoverCard = () => {

    return (
        <Card>
            <Card.Body>
                <Image src="https://i.dummyjson.com/data/products/8/thumbnail.jpg" />
            </Card.Body>
        </Card>
    );
};
export default HoverCard;