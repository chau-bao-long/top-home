// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { breakpoint } from '../../vars/helper';

type Props = {
  collapse: boolean,
  editMode: boolean,
  onEditBlog: Function,
  onDeleteBlog: Function,
  isAuth: boolean,
}

const SubscribeButton = styled.button.attrs({ className: "btn btn-outline-secondary" })`
  ${ breakpoint.xxs`
  order: 2;
  `}
`

const ThumbUpIcon = styled.i.attrs({ className: "lnr lnr-thumbs-up" })`
  margin-right: 5px;
`

const Title = styled.p.attrs({ className: "navbar-brand" })`
  font-family: 'Lato Regular';
  font-size: 1.5em;
  font-weight: bold;
  margin: 0;
`

const Toolbar = styled.span`
  justify-content: flex-end;
  align-items: center;
  display: flex;
  width: 120px;

  ${ breakpoint.xxs`order: 1;`}
`

const SharedBtnStyle = css`
  font-size: 1.2em;
  margin: 0 16px;
  color: black;

  &:hover {
    font-size: 1.5em;
    text-decoration: none;
  }
`

const EditButton = styled.span.attrs({ className: "lnr lnr-magic-wand" })`${SharedBtnStyle}`

const DeleteButton = styled.span.attrs({ className: "lnr lnr-trash" })`${SharedBtnStyle}`

const CreateButton = styled(Link).attrs({ 
  className: "lnr lnr-pencil",
  to: "/blogs/new",
})`${SharedBtnStyle}`

const SearchButton = styled.span.attrs({ className: "lnr lnr-magnifier" })`
  font-size: 1.2em;
  margin-left: 15px;

  &:hover {
    font-size: 1.5em;
  }
`

const Nav = styled.nav.attrs({
  className: "navbar navbar-expand-lg navbar-light sticky-top"
})`
  align-items: center;
  justify-content: space-between;
  height: 120px;
  transition: height .3s;
  padding: 8px 50px;
  position: fixed;
  top: 0;
  width: 100%;

  ${ breakpoint.xxs`padding: 20px;`}
`

export default class NavBar extends React.PureComponent<Props> {
  render() {
    const { onEditBlog, onDeleteBlog, editMode, isAuth, collapse } = this.props
    return (
      <Nav className={collapse ? 'navbar--scrolled' : ''}>
        <SubscribeButton>
          <ThumbUpIcon/>
          subscribe
        </SubscribeButton>
        <Title>READ MY BLOGS</Title>
        <Toolbar>
          { editMode && isAuth && <DeleteButton onClick={onDeleteBlog}/> }
          { editMode && isAuth && <EditButton onClick={onEditBlog}/> }
          { isAuth && <CreateButton /> }
          <SearchButton onClick={e => alert("I'm working on it, comming soon!")}/>
        </Toolbar>
      </Nav>
    )
  }
}
