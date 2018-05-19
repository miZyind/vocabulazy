// Node module
import React from 'react';
import styled from 'styled-components';
import { Bind } from 'lodash-decorators';
import { Link } from 'react-router-dom';
import { Grid, Menu, MenuItemProps, Icon } from 'semantic-ui-react';
// Component
import Logo from './logo';
// Model
import { ActiveItem } from '@models/menu';

type Props = {
  className?: string;
  toggleSidebar: MenuItemProps['onClick'];
  setActiveItem: (name: ActiveItem) => void;
  openSearchPanel: MenuItemProps['onClick'];
};

class MobileMenu extends React.PureComponent<Props> {
  public render() {
    const { className, toggleSidebar, openSearchPanel } = this.props;
    return (
      <Grid.Column className={className} width='16' >
        <Grid className='mobile-menu' as={Menu} inverted borderless>
          <Grid.Column className='icon-column' as={Menu.Item} width='2' onClick={toggleSidebar} stretched>
            <Icon name='sidebar' />
          </Grid.Column>
          <Grid.Column className='logo-column' width='12'>
            <Menu.Item name='home' as={Link} to='/home' onClick={this.handleOnItemClick}>
              <Logo />
            </Menu.Item>
          </Grid.Column>
          <Grid.Column className='icon-column' as={Menu.Item} width='2' onClick={openSearchPanel} stretched>
            <Icon name='search' />
          </Grid.Column>
        </Grid>
      </Grid.Column >
    );
  }

  @Bind
  private handleOnItemClick({ }, { name }: MenuItemProps) {
    if (name) {
      this.props.setActiveItem(name as ActiveItem);
    }
  }
}

export default styled(MobileMenu) `
  &&&& {
    padding: unset;
    .mobile-menu {
      min-height: 50px;
      border-radius: unset;
      background-color: #1ABC9C;
    }
    .icon-column { flex-direction: unset; }
    .logo-column {
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;