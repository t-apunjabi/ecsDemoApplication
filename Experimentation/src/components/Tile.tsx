import React from 'react';
import { Card } from 'react-bootstrap';
export function Tile(fontColor: string, height: number, width: number, picture: string, text: string, link: string, className: string, clicked: boolean, onClick: Function) {
    const boxMouseOverHandler = (event: React.MouseEvent<HTMLDivElement>) => {
        const box: HTMLDivElement = event.currentTarget;
        box.style.transform = "scale(1.1)";
    };
    
    const boxMouseOutHandler = (event: React.MouseEvent<HTMLDivElement>) => {
        const box: HTMLDivElement = event.currentTarget;
        box.style.transform = "scale(1.0)";
    };
    return (
        <div className={className} onMouseOver={boxMouseOverHandler} onMouseLeave={boxMouseOutHandler} onClick={()=>onClick()}>
            <Card className="text-center" style={{ width: width.toString() + 'rem', height: height.toString() + 'rem' }}>
        <Card.Img variant="top" src={picture} style={{
            height: '220px',

            width: 'auto',
        }} />
        <Card.Body>
            <Card.Title style={{ color: fontColor }} >{text}</Card.Title>
            <Card.Link>{link}</Card.Link>
        </Card.Body>
            </Card>
            </div>);
}
