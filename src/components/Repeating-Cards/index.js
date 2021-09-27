/* eslint-disable */
import React from 'react'
import { Container, Paragraph, Image, Header } from '../../lib/bundle_sitecore.js'
import PropTypes from 'prop-types'

import './repeating-cards.css'

const RepeatingCards = (props) => {
  return (
    <Container className="repeating-cards-container">
      <Container className="repeating-cards-container1">
        <Paragraph
          text={props.fields.text_string_7}
          className="repeating-cards-paragraph"
        ></Paragraph>
        <Image src={props.fields.src_object_2} className="repeating-cards-image"></Image>
      </Container>
      <Container className="repeating-cards-container2">
        <Image src={props.fields.src_object_1} className="repeating-cards-image1"></Image>
        <Container className="repeating-cards-container3">
          <Header text={props.fields.text_string_4} className="repeating-cards-header"></Header>
          <Paragraph
            text={props.fields.text_string_6}
            className="repeating-cards-paragraph1"
          ></Paragraph>
        </Container>
      </Container>
      <Container className="repeating-cards-container4">
        <Container className="repeating-cards-container5">
          <Header text={props.fields.text_string_3} className="repeating-cards-header1"></Header>
          <Paragraph
            text={props.fields.text_string_5}
            className="repeating-cards-paragraph2"
          ></Paragraph>
        </Container>
        <Image src={props.fields.src_object_0} className="repeating-cards-image2"></Image>
      </Container>
    </Container>
  )
}

RepeatingCards.defaultProps = {
  'fields.src_object_0': 'src',
  fields: {},
  'fields.src_object_1': 'src',
  'fields.src_object_2': 'src',
  'fields.text_string_3': 'text',
  'fields.text_string_4': 'text',
  'fields.text_string_5': 'text',
  'fields.text_string_6': 'text',
  'fields.text_string_7': 'text',
}

RepeatingCards.propTypes = {
  'fields.src_object_0': PropTypes.object,
  fields: PropTypes.object,
  'fields.src_object_1': PropTypes.object,
  'fields.src_object_2': PropTypes.object,
  'fields.text_string_3': PropTypes.string,
  'fields.text_string_4': PropTypes.string,
  'fields.text_string_5': PropTypes.string,
  'fields.text_string_6': PropTypes.string,
  'fields.text_string_7': PropTypes.string,
}

export default RepeatingCards
