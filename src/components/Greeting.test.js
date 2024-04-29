import Greeting from "./Greeting"
import { render,screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";

describe('Greeting component', ()=>{
    test('renders Hello world as a test',()=>{
        //Arrange
        render(<Greeting/>)
    
        //Act
        // ... nothing
    
        //Assert
        const helloWorldElement = screen.getByText('Hello World!')
        expect(helloWorldElement).toBeInTheDocument()
    })

    test('renders good to see you if the button is not clicked',()=>{
        render(<Greeting/>);

        const outputElemet = screen.getByText('good to see you', {exact: false})
        expect(outputElemet).toBeInTheDocument()
    })

    test('renders Changed! if the button was clicked', ()=>{
        render(<Greeting/>)

        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)

        const outputElemet = screen.getByText('Changed!')
        expect(outputElemet).toBeInTheDocument();
    })

    test('does not render good to see you if the button was clicked',()=>{
        render(<Greeting/>)

        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)

        const outputElemet = screen.queryByText('good to see you!',{exact:false})
        expect(outputElemet).toBeNull()
    })
});

