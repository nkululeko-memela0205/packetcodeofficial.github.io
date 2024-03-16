import React from 'react'

import PropTypes from 'prop-types'

import './event-card.css'

const EventCard = (props) => {
  return (
    <div className="event-card-event-card">
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="event-card-image"
      />
      <div className="event-card-vertical-line"></div>
      <div className="event-card-container">
        <span className="event-card-title">{props.newProp}</span>
        <span className="event-card-text">{props.text}</span>
      </div>
    </div>
  )
}

EventCard.defaultProps = {
  newProp: 'Max Dacosta:',
  imageAlt: 'image',
  text: 'Captains the titanic High Fives FC, Demands nothing but the best from his 5 men and leads from the back line with blistering pace at surprise moments to create opportunity out of nothing.',
  imageSrc:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwfHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&ixlib=rb-1.2.1&w=200',
}

EventCard.propTypes = {
  newProp: PropTypes.string,
  imageAlt: PropTypes.string,
  text: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default EventCard
