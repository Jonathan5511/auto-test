import Async from "./Async"
import { render,screen } from "@testing-library/react"


describe('Async Component',()=>{
    test('renders posts if request succedes',async()=>{
        window.fetch = jest.fn()
        window.fetch.mockResolvedValueOnce({
            json:async()=>[{id:'p1',title:'First post'}]
        })
        render(<Async/>)

        const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0);
    })
})