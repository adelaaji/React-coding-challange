/* eslint-disable */
import React from 'react'
import { Header, Image, Paragraph, Button } from '../../lib/bundle_sitecore.js'
import PropTypes from 'prop-types'

import './three-columnwith-heading.css'

const ThreeColumnwithHeading = (props) => {
  return (
    <div className="three-columnwith-heading-container">
      <Header
        text={props.fields.text_string_5}
        className="three-columnwith-heading-header"
      ></Header>
      <div className="three-columnwith-heading-container1">
        <div className="three-columnwith-heading-container2">
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
        </div>
        <div className="three-columnwith-heading-container3">
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
        </div>
        <div className="three-columnwith-heading-container4">
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
        </div>
      </div>
    </div>
  )
}

ThreeColumnwithHeading.defaultProps = {
  'fields.text_string_0': 'text',
  'fields.link_link_0': 'link',
  fields: {},
  'fields.src_object_1': 'src',
  'fields.text_string_2': 'text',
  'fields.link_link_2': 'link',
  'fields.src_object_3': 'src',
  'fields.text_string_4': 'text',
  'fields.link_link_4': 'link',
  'fields.text_string_5': 'text',
  'fields.src_object_6': 'src',
  'fields.text_string_7': 'text',
  'fields.text_string_8': 'text',
  'fields.text_string_9': 'text',
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
