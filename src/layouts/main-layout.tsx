import './main-layout.css'
import * as React from 'react'
import { Navbar, Nav, FormControl, Form, Button, NavItem } from 'react-bootstrap'
import { Link } from 'react-router'
import { FormEvent } from 'react'

// import { LayoutTopNav, LayoutTopNavLink } from './components/layout-top-nav'
// import { LayoutHeader } from './components/layout-header'
// import { LayoutMain } from './components/layout-main'
// import { LayoutFooter } from './components/layout-footer'

function handleSubmit(event: FormEvent<Form>) {
  console.log('Blah')
  event.preventDefault()
  event.stopPropagation()
  console.log(event)
}

export function MainLayout() {
  console.log('????')
  return (
    <Navbar fixedTop={true}>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to='/'>React-Bootstrap</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight navbar>
        <NavItem>
          <Form inline onSubmit={handleSubmit}>
            <FormControl type='text' placeholder='Swagger URL' name='swaggerURL'/>
            <Button type='submit' onClick={(event) => {console.log(event.currentTarget)}}>Go</Button>
          </Form>
        </NavItem>
      </Nav>
    </Navbar>
  )
}
