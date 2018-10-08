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

const SubscribeButton = styled.button.attrs({
  className: 'btn btn-outline-secondary',
  'data-toggle': 'modal',
  'data-target': '#subscribeModalId',
})``;

const ThumbUpIcon = styled.i.attrs({ className: 'lnr lnr-thumbs-up' })`
  margin-right: 5px;
`;

const Title = styled(Link).attrs({
  to: '/',
  className: 'navbar-brand' 
})`
  font-family: 'Lato Regular';
  font-size: 1.5em;
  font-weight: bold;
  margin: 0;

  ${breakpoint.xs`display: none;`}
`;

const Toolbar = styled.span`
  justify-content: flex-end;
  align-items: center;
  display: flex;
  max-width: 170px;
`;

const SharedBtnStyle = css`
  font-size: 1.2em;
  margin: 0 16px;
  color: black;

  &:hover {
    font-size: 1.5em;
    text-decoration: none;
  }
`;

const EditButton = styled.span.attrs({ className: 'lnr lnr-magic-wand' })`${SharedBtnStyle}`;

const DeleteButton = styled.span.attrs({ className: 'lnr lnr-trash' })`${SharedBtnStyle}`;

const CreateButton = styled(Link).attrs({
  className: 'lnr lnr-pencil',
  to: '/blogs/new',
})`${SharedBtnStyle}`;

const SearchButton = styled.span.attrs({ className: 'lnr lnr-magnifier' })`
  font-size: 1.2em;
  margin-left: 15px;

  &:hover {
    font-size: 1.5em;
  }
`;

const Nav = styled.nav.attrs({
  className: 'navbar navbar-expand-lg navbar-light sticky-top',
})`
  align-items: center;
  justify-content: space-between;
  height: 120px;
  transition: height .3s;
  padding: 8px 50px;
  position: fixed;
  top: 0;
  width: 100%;

  ${props => props.collapse && css`
    border-bottom: .5px solid ${props.theme.color.iron};
    box-shadow: 0 .5px .5px -.3px ${props.theme.color.iron};
    height: 60px;
    background: white;
  `}

  ${breakpoint.xxs`padding: 20px;`}

  ${breakpoint.xs`align-content: space-between;`}
`;

export default class NavBar extends React.PureComponent<Props> {
  render() {
    const {
      onEditBlog, onDeleteBlog, editMode, isAuth, collapse,
    } = this.props;
    return (
      <Nav collapse={collapse}>
        <SubscribeButton>
          <ThumbUpIcon />
          subscribe
        </SubscribeButton>
        <Title>READ MY BLOGS</Title>
        <Toolbar>
          { editMode && isAuth && <DeleteButton onClick={onDeleteBlog} /> }
          { editMode && isAuth && <EditButton onClick={onEditBlog} /> }
          { isAuth && <CreateButton /> }
          <SearchButton onClick={() => alert("I'm working on it, comming soon!")} />
        </Toolbar>
      </Nav>
    );
  }
}
