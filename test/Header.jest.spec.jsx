import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Header from '../client/components/Header'

describe('<Header />', () => {
  it('should render a title', async () => {

    const { getByText } = render(<Header />)

    const element = getByText('Memes app CI-CD')

    expect(element).toBeInTheDocument()
  })
})
