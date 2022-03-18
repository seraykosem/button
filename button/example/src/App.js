import React from 'react'

import { Button } from 'my-button-component'
import 'my-button-component/dist/index.css'

const App = () => {
  return <>
    <div className="btn-div">
      <div className="">
        <Button className="btn primary" type="primary">Primary Button</Button>
        <Button className="btn default" >Default Button</Button>
        <Button className="btn dashed" type="dashed">Dashed Button</Button>
        <br />
        <Button className="btn text" type="text">Text Button</Button>
        <Button className="btn link" type="link">Link Button</Button>
      </div>
    </div>
  </>
}

export default App
