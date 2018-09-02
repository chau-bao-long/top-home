// @flow
import * as React from 'react';

type Props = {
  refOrigin: (?Element) => void,
  html: string,
  onChange?: Function,
  onBlur?: Function,
  className?: string,
  placeHolder?: string,
  tagName?: string,
  disabled?: boolean,
  children?: React.Node,
};

export default class Contenteditable extends React.Component<Props> {
  lastHtml: string
  htmlEl: any = null

  constructor(props: Props) {
    super();
    this.emitChange = this.emitChange.bind(this);
    this.lastHtml = props.html
  }

  render() {
    const { 
      placeHolder,
      html,
      tagName,
      disabled,
      onBlur,
      ...props
    } = this.props

    return React.createElement(
      tagName || "div",
      {
        ...props,
        ref: (e: ?Element) => {
          this.htmlEl = e
          this.props.refOrigin(e)
        },
        onInput: this.emitChange,
        onBlur: onBlur || this.emitChange,
        contentEditable: !disabled,
        dangerouslySetInnerHTML: {__html: html},
        placeholder: placeHolder,
      },
      this.props.children,
    )
  }

  shouldComponentUpdate(nextProps: Props) {
    const { props, htmlEl, normalizeHtml } = this;
    if (!htmlEl) return true;
    if (normalizeHtml(nextProps.html) !== normalizeHtml(htmlEl.innerHTML)
      && nextProps.html !== props.html) return true;
    return props.disabled !== nextProps.disabled ||
      props.tagName !== nextProps.tagName ||
      props.className !== nextProps.className
  }

  componentDidUpdate() {
    if (this.htmlEl && this.props.html !== this.htmlEl.innerHTML) {
      this.htmlEl.innerHTML = this.lastHtml = this.props.html;
    }
  }

  emitChange = (evt: any) => {
    if (!this.htmlEl) return;
    var html = this.htmlEl.innerHTML;
    if (this.props.onChange && html !== this.lastHtml) {
      evt.target = { value: html };
      this.props.onChange(evt);
    }
    this.lastHtml = html;
  }

  normalizeHtml(str: string) {
    return str && str.replace(/&nbsp;|\u202F|\u00A0/g, ' ')
  }

  focus() {
    this.htmlEl.focus()
  }
}
