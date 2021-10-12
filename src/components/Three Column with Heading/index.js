/* eslint-disable */
import React from 'react'
import { Container, Header, Image, Paragraph, Button } from '../../lib/bundle_sitecore.js'
import PropTypes from 'prop-types'

import './three-columnwith-heading.css'

const ThreeColumnwithHeading = (props) => {
  return (
    <Container className="three-columnwith-heading-container">
      <Header
        text={props.fields.text_string_5}
        className="three-columnwith-heading-header"
      ></Header>
      <Container className="three-columnwith-heading-container1">
        <Container className="three-columnwith-heading-container2">
          <Image src={props.fields.src_object_3} className="three-columnwith-heading-image"></Image>
          <Paragraph
            text={props.fields.text_string_9}
            className="three-columnwith-heading-paragraph"
          ></Paragraph>
          <Button
            text={props.fields.text_string_2}
            link={props.fields.link_link_2}
            className="three-columnwith-heading-button"
          ></Button>
        </Container>
        <Container className="three-columnwith-heading-container3">
          <Image
            src={props.fields.src_object_1}
            className="three-columnwith-heading-image1"
          ></Image>
          <Paragraph
            text={props.fields.text_string_7}
            className="three-columnwith-heading-paragraph1"
          ></Paragraph>
          <Button
            text={props.fields.text_string_4}
            link={props.fields.link_link_4}
            className="three-columnwith-heading-button1"
          ></Button>
        </Container>
        <Container className="three-columnwith-heading-container4">
          <Image
            src={props.fields.src_object_6}
            className="three-columnwith-heading-image2"
          ></Image>
          <Paragraph
            text={props.fields.text_string_8}
            className="three-columnwith-heading-paragraph2"
          ></Paragraph>
          <Button
            text={props.fields.text_string_0}
            link={props.fields.link_link_0}
            className="three-columnwith-heading-button2"
          ></Button>
        </Container>
      </Container>
    </Container>
  )
}

ThreeColumnwithHeading.defaultProps = {
  'fields.text_string_0': 'Button',
  'fields.link_link_0': '',
  fields: {},
  'fields.src_object_1': 'http://localhost:8081/graphics/default.png',
  'fields.text_string_2': 'Button',
  'fields.link_link_2': '',
  'fields.src_object_3': 'http://localhost:8081/graphics/default.png',
  'fields.text_string_4': 'Button',
  'fields.link_link_4': '',
  'fields.text_string_5': 'HEADER',
  'fields.src_object_6': 'http://localhost:8081/graphics/default.png',
  'fields.text_string_7':
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air. Tailslide airwalk nosebone concave Saran Wrap. Berm nollie snake fakie out concave H-Street. Vans fast plant blunt pogo yeah layback. Thunder steps trucks rock and roll Saran Wrap vert. Mini ramp speed wobbles bruised heel bigspin wax The Faction. Pop shove-it Chris Pastras rail coffin concave feeble. Handplant masonite goofy footed tuna-flip rip grip. Ollie World Industries transition kick-nose indy grab dude. Rail melancholy nose bump nosepicker tuna-flip Ron Chapman. Sponsored baseplate varial blunt manual.',
  'fields.text_string_8':
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air. Tailslide airwalk nosebone concave Saran Wrap. Berm nollie snake fakie out concave H-Street. Vans fast plant blunt pogo yeah layback. Thunder steps trucks rock and roll Saran Wrap vert. Mini ramp speed wobbles bruised heel bigspin wax The Faction. Pop shove-it Chris Pastras rail coffin concave feeble. Handplant masonite goofy footed tuna-flip rip grip. Ollie World Industries transition kick-nose indy grab dude. Rail melancholy nose bump nosepicker tuna-flip Ron Chapman. Sponsored baseplate varial blunt manual.',
  'fields.text_string_9':
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air. Tailslide airwalk nosebone concave Saran Wrap. Berm nollie snake fakie out concave H-Street. Vans fast plant blunt pogo yeah layback. Thunder steps trucks rock and roll Saran Wrap vert. Mini ramp speed wobbles bruised heel bigspin wax The Faction. Pop shove-it Chris Pastras rail coffin concave feeble. Handplant masonite goofy footed tuna-flip rip grip. Ollie World Industries transition kick-nose indy grab dude. Rail melancholy nose bump nosepicker tuna-flip Ron Chapman. Sponsored baseplate varial blunt manual.',
}

ThreeColumnwithHeading.propTypes = {
  'fields.text_string_0': PropTypes.string,
  'fields.link_link_0': PropTypes.link,
  fields: PropTypes.object,
  'fields.src_object_1': PropTypes.object,
  'fields.text_string_2': PropTypes.string,
  'fields.link_link_2': PropTypes.link,
  'fields.src_object_3': PropTypes.object,
  'fields.text_string_4': PropTypes.string,
  'fields.link_link_4': PropTypes.link,
  'fields.text_string_5': PropTypes.string,
  'fields.src_object_6': PropTypes.object,
  'fields.text_string_7': PropTypes.string,
  'fields.text_string_8': PropTypes.string,
  'fields.text_string_9': PropTypes.string,
}

export default ThreeColumnwithHeading
