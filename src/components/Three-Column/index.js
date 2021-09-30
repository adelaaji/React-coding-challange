/* eslint-disable */
import React from 'react'
import { Container, Image, Header, Paragraph } from '../../lib/bundle_sitecore.js'
import PropTypes from 'prop-types'

import './three-column.css'

const ThreeColumn = (props) => {
  return (
    <Container className="three-column-container">
      <Container className="three-column-container1">
        <Image src={props.fields.src_object_1} className="three-column-image"></Image>
        <Header text={props.fields.text_string_7} className="three-column-header"></Header>
        <Paragraph text={props.fields.text_string_4} className="three-column-paragraph"></Paragraph>
      </Container>
      <Container className="three-column-container2">
        <Image src={props.fields.src_object_2} className="three-column-image1"></Image>
        <Header text={props.fields.text_string_3} className="three-column-header1"></Header>
        <Paragraph
          text={props.fields.text_string_6}
          className="three-column-paragraph1"
        ></Paragraph>
      </Container>
      <Container className="three-column-container3">
        <Image src={props.fields.src_object_0} className="three-column-image2"></Image>
        <Header text={props.fields.text_string_8} className="three-column-header2"></Header>
        <Paragraph
          text={props.fields.text_string_5}
          className="three-column-paragraph2"
        ></Paragraph>
      </Container>
    </Container>
  )
}

ThreeColumn.defaultProps = {
  'fields.src_object_0': 'http://localhost:8081/graphics/default.png',
  fields: {},
  'fields.src_object_1': 'http://localhost:8081/graphics/default.png',
  'fields.src_object_2': 'http://localhost:8081/graphics/default.png',
  'fields.text_string_3': 'HEADER',
  'fields.text_string_4':
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air. Tailslide airwalk nosebone concave Saran Wrap. Berm nollie snake fakie out concave H-Street. Vans fast plant blunt pogo yeah layback. Thunder steps trucks rock and roll Saran Wrap vert. Mini ramp speed wobbles bruised heel bigspin wax The Faction. Pop shove-it Chris Pastras rail coffin concave feeble. Handplant masonite goofy footed tuna-flip rip grip. Ollie World Industries transition kick-nose indy grab dude. Rail melancholy nose bump nosepicker tuna-flip Ron Chapman. Sponsored baseplate varial blunt manual.',
  'fields.text_string_5':
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air. Tailslide airwalk nosebone concave Saran Wrap. Berm nollie snake fakie out concave H-Street. Vans fast plant blunt pogo yeah layback. Thunder steps trucks rock and roll Saran Wrap vert. Mini ramp speed wobbles bruised heel bigspin wax The Faction. Pop shove-it Chris Pastras rail coffin concave feeble. Handplant masonite goofy footed tuna-flip rip grip. Ollie World Industries transition kick-nose indy grab dude. Rail melancholy nose bump nosepicker tuna-flip Ron Chapman. Sponsored baseplate varial blunt manual.',
  'fields.text_string_6':
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air. Tailslide airwalk nosebone concave Saran Wrap. Berm nollie snake fakie out concave H-Street. Vans fast plant blunt pogo yeah layback. Thunder steps trucks rock and roll Saran Wrap vert. Mini ramp speed wobbles bruised heel bigspin wax The Faction. Pop shove-it Chris Pastras rail coffin concave feeble. Handplant masonite goofy footed tuna-flip rip grip. Ollie World Industries transition kick-nose indy grab dude. Rail melancholy nose bump nosepicker tuna-flip Ron Chapman. Sponsored baseplate varial blunt manual.',
  'fields.text_string_7': 'HEADER',
  'fields.text_string_8': 'HEADER',
  'fields.bgImage_object_9': '',
}

ThreeColumn.propTypes = {
  'fields.src_object_0': PropTypes.object,
  fields: PropTypes.object,
  'fields.src_object_1': PropTypes.object,
  'fields.src_object_2': PropTypes.object,
  'fields.text_string_3': PropTypes.string,
  'fields.text_string_4': PropTypes.string,
  'fields.text_string_5': PropTypes.string,
  'fields.text_string_6': PropTypes.string,
  'fields.text_string_7': PropTypes.string,
  'fields.text_string_8': PropTypes.string,
  'fields.bgImage_object_9': PropTypes.object,
}

export default ThreeColumn
