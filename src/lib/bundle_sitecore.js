// prettier-ignore
/* eslint-disable */
import "./bundle_sitecore.css"

import React from 'react';
import { Text, Image, Link } from '@sitecore-jss/sitecore-jss-react';

const react$f = (props) => {
  return props.link
    ? React.createElement('button', { href: props.link.value.href, className: props.className }, [
        Text({ field: props.text, editable: true, encode: true }),
      ])
    : React.createElement('button', { className: props.className }, [
        Text({ field: props.text, editable: true, encode: true }),
      ]);
};

const react$e = (props) => {
  return React.createElement('div', { className: props.className }, [
    React.createElement('input', { type: 'checkbox', checked: 'true' }),
  ]);
};

const react$d = (props) => {
  const backgroundImage =
    props && props.bgImage && props.bgImage.value ? props.bgImage.value.url : null;
  return React.createElement(
    'div',
    {
      className: props.className,
      style: { backgroundImage: !!backgroundImage ? `url(${backgroundImage})` : 'none' },
    },
    [props.children]
  );
};

const react$c = (props) => {
  return Text({
    className: props.className,
    encode: true,
    field: props.text,
    editable: true,
    tag: 'h2',
  });
};

const react$b = (props) => {
  return React.createElement('label', { className: props.className + ' switch' }, [
    React.createElement('input', { type: 'checkbox' }),
    React.createElement('span', { className: 'slider round' }),
  ]);
};

const react$a = (props) => {
  return props.src && props.src.value
    ? Image({
        className: props.className,
        field: props.src,
        editable: true,
        height: props.src.value.height,
        width: props.src.value.width,
      })
    : null;
};

const react$9 = (props) => {
  return Link({ field: props.href, className: props.className, editable: true });
};

const react$8 = (props) => {
  return React.createElement('div', { className: props.className }, [
    React.createElement('input', { type: 'radio', name: 'radio' }),
  ]);
};

const react$7 = (props) => {
  return Text({
    className: props.className,
    encode: true,
    field: props.text,
    editable: true,
    tag: 'label',
  });
};

const react$6 = (props) => {
  return React.createElement('textarea', { className: props.className, value: '' });
};

const react$5 = (props) => {
  return React.createElement('input', { className: props.className, type: 'text', value: '' });
};

const react$4 = (props) => {
  return React.createElement('video', { controls: true, className: props.className }, [
    React.createElement('source', { src: props.src ? props.src.url : null }),
  ]);
};

const react$3 = () => {
  return React.createElement('hr', { style: { width: '100%' } });
};

const react$2 = (props) => {
  return Text({
    className: props.className,
    encode: true,
    field: props.text,
    editable: true,
    tag: 'p',
  });
};

const react$1 = (props) => {
  return React.createElement('div', { className: props.className + ' dropdown' }, [
    React.createElement(
      'button',
      { className: 'dropbtn', style: { width: '100%', height: '100%' } },
      [Text({ field: props.text, editable: true, encode: true })]
    ),
    React.createElement('div', { className: 'dropdown-content' }, [
      React.createElement('div', null, [
        props.list &&
          props.list.map((item, index) =>
            React.createElement('div', { key: 'listItem-' + index }, [
              React.createElement('span', null, [item.name]),
            ])
          ),
      ]),
    ]),
  ]);
};

const react = (props) => {
  return React.createElement('ul', { className: props.className }, [
    props.list &&
      props.list.map((item, index) =>
        React.createElement('li', { key: 'listItem-' + index }, [
          React.createElement('span', null, [item.name]),
        ])
      ),
  ]);
};

export {
  react$f as Button,
  react$e as Checkbox,
  react$d as Container,
  react$1 as Dropdown,
  react$c as Header,
  react$a as Image,
  react$7 as Label,
  react$3 as Linebreak,
  react$9 as Link,
  react as List,
  react$2 as Paragraph,
  react$8 as Radiobutton,
  react$6 as Textarea,
  react$5 as Textinput,
  react$b as Toggle,
  react$4 as Video,
};
