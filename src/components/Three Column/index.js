/* eslint-disable */
import React from 'react'
import { Container, Image, Header, Paragraph, Video, Label } from '../../lib/bundle_sitecore.js'
import PropTypes from 'prop-types'

import './three-column.css'

const ThreeColumn = (props) => {
  return (
    <Container className="three-column-container">
      <Container className="three-column-container1">
        <Container className="three-column-container2">
          <Container className="three-column-container3">
            <Image src={props.fields.src_object_1} className="three-column-image"></Image>
            <Header text={props.fields.text_string_7} className="three-column-header"></Header>
            <Paragraph
              text={props.fields.text_string_4}
              className="three-column-paragraph"
            ></Paragraph>
          </Container>
          <Container className="three-column-container4">
            <Image src={props.fields.src_object_2} className="three-column-image1"></Image>
            <Header text={props.fields.text_string_3} className="three-column-header1"></Header>
            <Paragraph
              text={props.fields.text_string_6}
              className="three-column-paragraph1"
            ></Paragraph>
          </Container>
          <Container className="three-column-container5">
            <Image src={props.fields.src_object_0} className="three-column-image2"></Image>
            <Header text={props.fields.text_string_8} className="three-column-header2"></Header>
            <Paragraph
              text={props.fields.text_string_5}
              className="three-column-paragraph2"
            ></Paragraph>
          </Container>
        </Container>
        <Video src={props.fields.src_object_1633355018523} className="three-column-video"></Video>
        <Video src={props.fields.src_object_1633355054650} className="three-column-video1"></Video>
        <Label text={props.fields.text_string_1633355012450} className="three-column-label"></Label>
        <Video src={props.fields.src_object_1633353743741} className="three-column-video2"></Video>
        <Video src={props.fields.src_object_1633354850996} className="three-column-video3"></Video>
        <Video src={props.fields.src_object_1633354860345} className="three-column-video4"></Video>
      </Container>
      <Video src={props.fields.src_object_1633353842659} className="three-column-video5"></Video>
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
  'fields.src_object_1633353743741': '/graphics/playarrow.png',
  'fields.src_object_1633353842659': '/graphics/playarrow.png',
  'fields.src_object_1633354850996': '/graphics/playarrow.png',
  'fields.src_object_1633354860345': '/graphics/playarrow.png',
  'fields.text_string_1633355012450': 'Label',
  'fields.src_object_1633355018523': '/graphics/playarrow.png',
  'fields.src_object_1633355054650': '/graphics/playarrow.png',
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
  'fields.src_object_1633353743741': PropTypes.object,
  'fields.src_object_1633353842659': PropTypes.object,
  'fields.src_object_1633354850996': PropTypes.object,
  'fields.src_object_1633354860345': PropTypes.object,
  'fields.text_string_1633355012450': PropTypes.string,
  'fields.src_object_1633355018523': PropTypes.object,
  'fields.src_object_1633355054650': PropTypes.object,
}

export default ThreeColumn
