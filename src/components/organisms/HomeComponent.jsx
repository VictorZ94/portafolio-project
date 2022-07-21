// @packages
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types'
import { Icon } from '@iconify/react';

// @styles
import './homeComponent.css'
import SocialMedia from '../molecules/SocialMedia';

const HomeComponent = () => {
  return (
    <Container fluid>
      <Row className='view-heigth-100 align-items-center'>
        <Col className='d-flex flex-column justify-content-center'>
          <SocialMedia />
        </Col>
        <Col md={10} className='header-content'>
          <div align='center' className='first-line fw-bold'>
            <span className='custom-color'>Víctor </span>
            Zuluaga
          </div>
          <div align='center' className='second-line mt-3'>
            <p>I'm a developer 
            <span className='custom-color'> Full stack</span></p>
          </div>
        </Col>
        <Col>Social media links</Col>
      </Row>
    </Container>
  )
}

HomeComponent.propTypes = {}

export default HomeComponent
