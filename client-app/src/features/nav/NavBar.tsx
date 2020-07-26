import React from 'react'
import { Menu, Container, Button } from 'semantic-ui-react'

interface IProps{
  setOpenCreateForm : ()=> void;
}

export const NavBar: React.FC<IProps> = ({setOpenCreateForm}) => {
    return (
        <Menu fixed="top" inverted>
          <Container>
        <Menu.Item header>
          <img src="/assets/logo.png" alt="logo" style={{marginRight:'10px'}}/>
          Reactivities
          </Menu.Item>        
          <Menu.Item
          name='Activities'
        />
        <Menu.Item>
          <Button onClick={setOpenCreateForm} positive content='Create Activity'></Button>
        </Menu.Item>
        </Container>
      </Menu>
    )
}

export default NavBar