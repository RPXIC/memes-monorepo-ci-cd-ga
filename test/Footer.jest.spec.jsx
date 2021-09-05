import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Footer from '../client/components/Footer'

describe('<Footer />', () => {
  it('should render a dedication', async () => {

    const { getByText } = render(<Footer />)

    const element = getByText('With ♥ to Rynxe')

    expect(element).toBeInTheDocument()
  })
})
