import { mButton, TestingElement } from 'Components/TestingElement'

export const TestingPage = () => {
  return <TestingElement Array={[mButton({ props: { variant: 'contained' } })]} />
}
