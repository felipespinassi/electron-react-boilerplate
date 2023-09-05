import { Row, Button } from 'antd'
import { useState } from 'react'

export default function App(): JSX.Element {
  const [counter, setCounter] = useState(0)

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column'
      }}
    >
      <Row>
        <Button onClick={() => setCounter(counter + 1)} type="primary">
          Electron + react + antd
        </Button>
      </Row>
      <Row style={{ paddingTop: 20 }}>
        <p>{counter}</p>
      </Row>
    </div>
  )
}
