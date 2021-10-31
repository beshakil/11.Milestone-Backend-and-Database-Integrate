import React from 'react';
import { Carousel } from 'react-bootstrap';
import ImgBannerOne from '../../image/2 img.jpg'
import ImgBannerTwo from '../../image/3 img.jpg'
import './banner.css'

const Banner = () => {
    return (
        <Carousel className="rounded container pb-5">
            <Carousel.Item>
                <img
                    className="d-block w-100 rounded banner"
                    src={ImgBannerOne}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1>Dhaka To Kalkata</h1>
                    <h4>Nulla vitae elit libero, a pharetra augue mollis interdum.</h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 rounded banner"
                    src={ImgBannerTwo}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h1>Dhaka To USA</h1>
                    <h4>Nulla vitae elit libero, a pharetra augue mollis interdum.</h4>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;