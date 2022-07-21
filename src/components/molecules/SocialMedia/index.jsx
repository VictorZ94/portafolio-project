import React from 'react'
import PropTypes from 'prop-types'
import { Col } from 'react-bootstrap'
import { SocialIcon } from '../../atoms/SocialIcon'

const SocialMedia = () => {
  return (
    <>
      <SocialIcon
        url={'https://www.linkedin.com/in/victorzuluaga/'}
        socialName={"linkedin"}
        className={'network-icon'}
      />
      <SocialIcon
        url={"#"}
        socialName={"facebook"}
        className={'network-icon my-3'}
      />
      <SocialIcon
        url={'https://www.linkedin.com/in/victorzuluaga/'}
        socialName={"github"}
        className={'network-icon'}
      />
    </>
  )
}

SocialMedia.propTypes = {}

export default SocialMedia