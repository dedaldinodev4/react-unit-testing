import React from 'react'
import { Button } from './components/button';
import { Link } from './components/link';
import { CheckBoxWithLabel } from './components/checkbox';
import { List } from './components/list';

const App = () => {
  return (
    <React.Fragment>
      <h1>
        Hello World
      </h1>
      <Button variant='secondary'>Click Me</Button> <br/>
      <Link page='/auth/register'>Link</Link> <br/>
      <CheckBoxWithLabel labelOn='On' labelOff='Off' /> <br/>
      <List initialStatus={['dedaldino', 'adelia', 'alana']}/>
    </React.Fragment>
  )
}

export default App
