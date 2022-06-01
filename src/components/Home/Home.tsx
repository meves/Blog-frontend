import React, { FC } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Home: FC = (props) => {
    return (
      <Carousel fade>

        <Carousel.Item>
          <div style={{backgroundColor: 'gray', width: '100%', height: '80vh', textAlign: 'center'}}>Item One</div>
          <Carousel.Caption>
            <h3>Fourth slide label</h3>
            <p>Hello, world!</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div style={{backgroundColor: 'gray', width: '100%', height: '80vh', textAlign: 'center'}}>Item Two</div>
          <Carousel.Caption>
            <h3>Fourth slide label</h3>
            <p>Hello, world!</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div style={{backgroundColor: 'gray', width: '100%', height: '80vh', textAlign: 'center'}}>Item Three</div>
          <Carousel.Caption>
            <h3>Fourth slide label</h3>
            <p>Hello, world!</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div style={{backgroundColor: 'gray', width: '100%', height: '80vh', textAlign: 'center'}}>Item Four</div>
          <Carousel.Caption>
            <h3>Fourth slide label</h3>
            <p>Hello, world!</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    )
}
