import { render, screen } from '@testing-library/react'
import ExpandableText from '../../src/components/ExpandableText';
import userEvent from '@testing-library/user-event';

describe('ExapandableText', () => {
    it("should show full text if the button is clicked" , async () => {
        const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae deserunt veniam aliquid, incidunt fugit facere aut eius nostrum quia ipsa illum ipsum laborum, consequatur nam eos voluptas unde, obcaecati odio sunt sit ut! Ad harum sit labore veritatis placeat nulla explicabo, doloremque saepe soluta? Sint quod consequatur sit ex in."
        render(<ExpandableText text={text}/>)
        
        const truncatedText = text.substring(0, 255) + "..."
        const button = screen.getByRole('button')
        expect(button).toHaveTextContent(/more/i)
        expect(screen.getByText(truncatedText)).toBeInTheDocument()

        const user = userEvent.setup()
        await user.click(button)
        expect(screen.getByText(text)).toBeInTheDocument()
        expect(button).toHaveTextContent(/less/i)
    });
    it("should display full text if under the length limit", () => {
        const text = "Short Text"
        render(<ExpandableText text={text}/>)
        expect(screen.getByText(text)).toBeInTheDocument()
    })
})