import { render, screen } from '@testing-library/react'
import Greet from '../../src/components/Greet'

describe('Greet', () => {
    it("should render Hello with the name when it is provided", () => {
        render(<Greet name="Jay"/>)
        const heading = screen.getByRole('heading')
        expect(heading).toBeInTheDocument()
        expect(heading).toHaveTextContent(/Jay/i)
    });
    it("should render render login button when name is not provided", () => {
        render(<Greet name=""/>)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()
        expect(button).toHaveTextContent(/login/i)
    })
})