// @flow
import React from "react"
import ReactMarkdown from "react-markdown"
import _ from "lodash"
import Contenteditable from "../Common/Contenteditable"

type Props = {
}

type State = {
  content: string,
  caretPosition: number,
  isEmpty: boolean,
}

export default class FundComponent extends React.Component<Props, State> {
  defaultContent: string = '<p><br></p>'
  input: Contenteditable;
  cache: number;
  idGen: IdGenerator = new IdGenerator();
  mentions: Array<Mention> = [];

  constructor(props: Props) {
    super()
    this.state = {
      content: "",
      caretPosition: 0,
      isEmpty: true,
    }
  }

  render() {
    const { content, caretPosition, isEmpty } = this.state
    return (
      <div>
        <Contenteditable
          ref={e => this.input = e}
          placeHolder="Enter your comments "
          html={content}
          onChange={e => this.handleChange(e.target.value)}
          onKeyUp={e => this.onBlur(e)}
          onMouseUp={e => this.onBlur(e)}
          className={ isEmpty ? 'empty' : ''}
        />
        <button onClick={e => this.click()}>TO</button>
        <div>caret position {caretPosition}</div>
      </div>
    );
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
  }

  handleChange(value) {
    let prevContent;
    this.setState(prevState => {
      prevContent = prevState.content;
      return {
        ...prevState,
        content: this.handleFirstTimeInput(prevContent, value),
        isEmpty: this.input.isEmpty(),
      }
    }, () => {
      if (prevContent.length == 0 || prevContent == this.defaultContent) {
        this.input.moveToFirstContent();
      }
    });
  }

  onBlur(e) {
    this.setState({caretPosition: this.input.getCaretCharacterOffsetWithin()})
  }

  click() {
    let newId = this.idGen.id
    const mention = new Mention(newId, "", 'topcbl')
    this.mentions.push(mention)
    this.setState(prevState => {
      return {
        ...prevState,
        content: this.genMentionContent(prevState.content, mention),
        isEmpty: false,
      };
    });
  }

  handleFirstTimeInput(prevContent, newContent) {
    if (prevContent.length > 0) return newContent;
    if (this.input.childCount() == 1) {
      return `<p>${newContent}</p>`;
    } else {
      return '';
    }
  }

  genMentionContent(prevContent, mention) {
    if (prevContent.length == 0) {
      return `<p>${mention.render()}</p>`
    } else if (this.input.isContainNoText()) {
      return this.removeEmptyPTagIfAny(prevContent) + `<p>${mention.render()}</p>`
    } else {
      return this.insertAt(prevContent,
        this.input.getActualCaretPos(this.state.caretPosition),
        mention.render())
    }
  }

  isContentNormalize(content) {
    return !/&nbsp;|\u202F|\u00A0/.test(content);
  }

  insertAt(s, i, add) {
    if (!this.isContentNormalize(s)) i += 'nbsp;'.length;
    return this.removeBrTagIfAny(s.substr(0, i)) + add + s.substr(i);
  }

  removeBrTagIfAny(str) {
    const pivot = str.length - '<br>'.length
    return str.substr(pivot, str.length) == '<br>' ? str.substr(0, pivot) : str
  }

  removeEmptyPTagIfAny(content) {
    return content.replace(/\<p\>\<br\>\<\/p\>/, '')
  }
}

class IdGenerator {
  count = 0

  get id() {
    return ++this.count
  }
}

class Mention {
  id: number;
  type: string;
  name: string;

  constructor(id, type, name) {
    this.id = id;
    this.type = type;
    this.name = name;
  }

  render() {
    return `<span id="${this.id + ""}" mention data-type="${this.type}" class="mention">TO ${this.name}</span>`;
  }
}

