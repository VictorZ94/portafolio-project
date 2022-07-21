import { Icon } from '@iconify/react'
import React from 'react'
import PropTypes from 'prop-types'

export const SocialIcon = ({url ,socialName, className}) => {
  return (
    <span align='center' className={className}>
      <a
        href={url}
        target='_blank'
        rel='noopener noreferrer'
        className='network-icon'
      >
        <Icon icon={`foundation:social-${socialName}`} width={42}/>
      </a>
    </span>
  )
}

SocialIcon.propTypes = {}
