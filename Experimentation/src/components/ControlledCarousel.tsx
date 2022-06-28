import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import pic from '../images/xbox.jpg'
import azure from '../images/azure2.webp'
import xboxlogo from '../images/xboxlogo.png'
import Button from 'react-bootstrap/Button'
function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex:number, e:any) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} >
            <Carousel.Item>
                <img
                    style={{
                        display: 'block',

                        marginLeft: 'auto',
                        marginRight: 'auto',
                        height: '1200px',
                        width: '2000px',
                 }}
                    src={pic}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <a href="http://www.xbox.com/">
                        <input type="image" src={xboxlogo} style={{ width: '50px', height: '50px' }} />
                    </a>
                    <h3>Power Your Dreams.</h3>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{
                        display: 'block',
                        
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        height: '1200px',
                        
                        width: '2000px',
                        
                    }}
                    src={azure}
                    alt="Second slide"
                />
                
                <Carousel.Caption>
                    <h3>AZURE. INVENT WITH PURPOSE.</h3>
                    <p>Build innovative new apps with the latest Azure technologies announced at Microsoft Build. Get started with pay-as-you-go pricing.</p>
                    <Button variant="dark" href="https://azure.microsoft.com/en-us/pricing/purchase-options/pay-as-you-go/">Get Started</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{
                        display: 'block',
                       
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        height: '1200px',

                        width: '2000px',
                    }}
                    src={pic}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel;