import React from 'react';
import { Carousel } from 'react-bootstrap';
import OurExpert from '../OurExpart/OurExpert';
import Servicers from '../services/Servicers';

const Home = () => {
    return (
        <>
            <h1 className="title">Mechanic House</h1>
            <Carousel className="container mt-5 rounded">
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 h-50 img-fluid"
                        src="https://image.freepik.com/free-photo/male-worker-wrapping-car-with-ptotective-foil_1303-27651.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 h-50 img-fluid"
                        src="https://t3.ftcdn.net/jpg/00/88/68/22/240_F_88682270_c7YUChyxNQm2ikpRsFyDWEwXN9mwufZM.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50 img-fluid"
                        src="https://image.freepik.com/free-photo/hands-car-mechanic-with-wrench-garage_146671-19688.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Servicers></Servicers>
            <OurExpert></OurExpert>
        </>
    );
};

export default Home;