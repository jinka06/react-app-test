import { render, screen } from '@testing-library/react'
import UserAccount from "../../src/components/UserAccount"
import { User } from '../../src/entities';

const user1: User = {
            id: 1,
            name: "Jay",
            isAdmin: true
        }
const user2: User = {
            id: 2,
            name: "James",
            isAdmin: false
        }
describe('UserAccount', () => {
    it("should display the name of the user", () => {
    
        render(<UserAccount user={user1}/>)
        const name = screen.getByText(/Jay/i)
        expect(name).toBeInTheDocument()
    });
    it("should have the button rendered if user is admin", () => {
        render(<UserAccount user={user1}/>)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()
        expect(button).toHaveTextContent(/Edit/i)
    });
    it("should not have the button rendered if user is not admin", () => {
        render(<UserAccount user={user2}/>)
        const button = screen.queryByRole('button')
        expect(button).not.toBeInTheDocument()
    })
})