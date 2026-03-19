import { render, screen } from '@testing-library/react'
import ProductImageGallery from '../../src/components/ProductImageGallery'


describe('ProductImageGallery', () =>{
    it("should not render any image if the string array is empty", () =>{
        expect(render(<ProductImageGallery imageUrls={[]}/>)).toBeEmptyDOMElement
    });
    it("should render the list of images if list not empty", () =>{
        const imgs = ['url1', 'url2']
        render(<ProductImageGallery imageUrls={imgs} />)
        expect(screen.getAllByRole('img')).toHaveLength(imgs.length)
        imgs.forEach((url, index) => {
            expect(screen.getAllByRole('img')[index]).toHaveAttribute('src', url)
        })
    })
})