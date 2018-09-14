// @flow
import * as React from 'react';

type Props = {
  html: string,
  onChange?: Function,
  onBlur?: Function,
  onKeyUp?: Function,
  onMouseUp?: Function,
  className?: string,
  placeHolder?: string,
  tagName?: string,
  disabled?: boolean,
  children?: React.Node,
  isEmpty: boolean,
};

export default class Contenteditable extends React.Component<Props> {
  lastHtml: string
  htmlEl: any = null

  constructor(props: Props) {
    super();
    this.emitChange = this.emitChange.bind(this);
    this.lastHtml = props.html;
  }

  render() {
    const { 
      placeHolder,
      html,
      tagName,
      disabled,
      onBlur,
      onKeyUp,
      onMouseUp,
      isEmpty,
      ...props
    } = this.props

    return React.createElement(
      tagName || "div",
      {
        ...props,
        id: "test",
        ref: e => this.htmlEl = e,
        onInput: this.emitChange,
        onKeyUp: onKeyUp,
        onMouseUp: onMouseUp,
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

  componentDidMount() {
    this.observeMutation()
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

  isEmpty() {
    return !this.htmlEl.textContent || this.htmlEl.textContent.length == 0
  }

  preventEnterNewLineWhenTextEmpty() {
    if (this.htmlEl.textContent.length > 0 || this.childCount() <= 1) return;
    while (this.htmlEl.firstChild) this.htmlEl.removeChild(this.htmlEl.firstChild);
  }

  isContainNoText() {
    let level1Childs = this.htmlEl.childNodes
    for (let i = 0, l = level1Childs.length; i < l; i++) {
      let level2Childs = level1Childs[i].childNodes
      for (let j = 0, k = level2Childs.length; j < k; j++) {
        if (level2Childs[j].nodeName == '#text') return false;
      }
    }
    return true;
  }

  normalizeHtml(str: string) {
    return str && str.replace(/&nbsp;|\u202F|\u00A0/g, ' ')
  }

  focus() {
    this.htmlEl.focus()
  }

  insertToNextSibling(value, curNode) {
    let nextNode = curNode.nextSibling
    if (!nextNode || (nextNode.attributes && nextNode.attributes.mention)) {
      nextNode = document.createTextNode(value)
      curNode.parentNode.insertBefore(nextNode, curNode.nextSibling)
    } else {
      nextNode.textContent = value + nextNode.textContent
    }
    this.selectElement(nextNode)
    this.moveCaret(1)
  }

  insertToPreviousSibling(value, curNode) {
    let prevNode = curNode.previousSibling
    if (!prevNode || (prevNode.attributes && prevNode.attributes.mention)) {
      prevNode = document.createTextNode(value)
      curNode.parentNode.insertBefore(prevNode, curNode)
    } else {
      prevNode.textContent = value + prevNode.textContent
    }
    this.selectElement(prevNode)
    this.moveCaret(prevNode.textContent.length)
  }

  getCaretCharacterOffsetWithin() {
    var caretOffset = 0;
    var doc = this.htmlEl.ownerDocument || this.htmlEl.document;
    var win = doc.defaultView || doc.parentWindow;
    var sel;
    if (typeof win.getSelection != "undefined") {
      sel = win.getSelection();
      if (sel.rangeCount > 0) {
        var range = win.getSelection().getRangeAt(0);
        var preCaretRange = range.cloneRange();
        preCaretRange.selectNodeContents(this.htmlEl);
        preCaretRange.setEnd(range.endContainer, range.endOffset);
        caretOffset = preCaretRange.toString().length;
      }
    } else if ((sel = doc.selection) && sel.type != "Control") {
      var textRange = sel.createRange();
      var preCaretTextRange = doc.body.createTextRange();
      preCaretTextRange.moveToElementText(this.htmlEl);
      preCaretTextRange.setEndPoint("EndToEnd", textRange);
      caretOffset = preCaretTextRange.text.length;
    }
    return caretOffset;
  }

  getCaretPosition() {
    if (window.getSelection && window.getSelection().getRangeAt) {
      var range = window.getSelection().getRangeAt(0);
      var selectedObj = window.getSelection();
      var rangeCount = 0;
      var childNodes = selectedObj.anchorNode.parentNode.childNodes;
      for (let i = 0; i < childNodes.length; i++) {
        if (childNodes[i] == selectedObj.anchorNode) {
          break;
        }
        if (childNodes[i].outerHTML)
          rangeCount += childNodes[i].outerHTML.length;
        else if (childNodes[i].nodeType == 3) {
          rangeCount += childNodes[i].textContent.length;
        }
      }
      return range.startOffset + rangeCount;
    }
    return -1;
  }

  moveCaret(position) {
    var sel, range;
    if (window.getSelection) {
      sel = window.getSelection();
      if (sel.rangeCount > 0) {
        var textNode = sel.focusNode;
        var newOffset = position;
        sel.collapse(textNode, Math.min(textNode.length, newOffset));
      }
    } else if ( (sel = window.document.selection) ) {
      if (sel.type != "Control") {
        range = sel.createRange();
        range.move("character", position);
        range.select();
      }
    }
  }

  selectElement(element) {
    if (!element) return;
    var range = document.createRange();
    range.selectNodeContents(element);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  }

  moveToFirstContent() {
    if (!this.htmlEl.firstChild) return;
    const firstContent = this.htmlEl.firstChild.firstChild;
    this.selectElement(firstContent);
    if (firstContent) this.moveCaret(firstContent.textContent.length);
  }

  getActualCaretPos(caretPos: number) {
    let pos = 0;
    for (let i = 0, l = this.htmlEl.childNodes.length; i < l; i++) {
      let lineNode = this.htmlEl.childNodes[i]
      if (caretPos <= lineNode.textContent.length ) {
        pos += this.getLineCaretPos(lineNode, caretPos); break;
      } else {
        caretPos -= lineNode.textContent.length;
        pos += lineNode.outerHTML.length;
      }
    }
    return pos;
  }

  getLineCaretPos(lineNode: any, caretPos: number) {
    let nodeLength, delta = 0, pos = 0;
    for (let i = 0, l = lineNode.childNodes.length; i < l; i++) {
      let node = lineNode.childNodes[i]
      const isTextNode = node.nodeName === '#text';
      nodeLength = isTextNode ? node.textContent.length : node.innerHTML.length;
      if (caretPos <= nodeLength) {
        pos += isTextNode ? caretPos : node.outerHTML.length; break;
      } else {
        if (!isTextNode) delta += node.outerHTML.length - node.innerHTML.length;
        pos += nodeLength;
        caretPos -= nodeLength;
      }
    }
    return pos + delta + "<p>".length;
  }

  observeMutation() {
    let observer = new MutationObserver(m => {
      this.preventEnterNewLineWhenTextEmpty();
      const parent = m[0].target.parentNode
      if (parent && parent.attributes.mention && m[0].type == 'characterData') {
        this.handleMentionContentChange(m[0].target.parentNode);
      } else if (m[2] && m[2].target.attributes && m[2].target.attributes.mention) {
        this.detectMentionEnterNewLine(m);
      }
    });
    observer.observe(this.htmlEl, {
      characterData: true,
      attributes: true,
      childList: true,
      subtree: true,
    });
  }

  detectMentionEnterNewLine(mutation: any) {
    if (mutation[2].target.textContent.length == 0) {
      mutation[2].target.replaceWith(document.createElement('BR'))
    }
  }

  handleMentionContentChange(element) {
    const value = element.textContent
    const curValue = 'TO topcbl';
    if (value === curValue) return;
    let pos = value.indexOf(curValue);
    if (pos == 0) {
      let tail = value.substr(curValue.length, value.length);
      element.textContent = curValue
      this.insertToNextSibling(tail, element);
    } else if (pos > 0 && pos + curValue.length == value.length) {
      let head = value.substr(0, pos);
      element.textContent = curValue
      this.insertToPreviousSibling(head, element);
    } else {
      element.remove()
    }
  }

  childCount() {
    return this.htmlEl.childNodes.length;
  }
}
