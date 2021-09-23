/* eslint-disable */
import React from 'react'
import { Image, Header, Paragraph, Button } from '../../lib/bundle_sitecore.js'
import PropTypes from 'prop-types'

import './product-card.css'

const ProductCard = (props) => {
  return (
    <div className="product-card-container">
      <Image src={props.fields.src_object_1} className="product-card-image"></Image>
      <div className="product-card-container1">
        <Header text={props.fields.text_string_2} className="product-card-header"></Header>
        <Paragraph text={props.fields.text_string_3} className="product-card-paragraph"></Paragraph>
        <Button
          text={props.fields.text_string_0}
          link={props.fields.link_link_0}
          className="product-card-button"
        ></Button>
      </div>
    </div>
  )
}

ProductCard.defaultProps = {
  'fields.text_string_0': 'text',
  'fields.link_link_0': 'link',
  fields: {},
  'fields.src_object_1': 'src',
  'fields.text_string_2': 'text',
  'fields.text_string_3': 'text',
}

ProductCard.propTypes = {
  'fields.text_string_0': PropTypes.string,
  'fields.link_link_0': PropTypes.link,
  fields: PropTypes.object,
  'fields.src_object_1': PropTypes.object,
  'fields.text_string_2': PropTypes.string,
  'fields.text_string_3': PropTypes.string,
}

export default ProductCard
