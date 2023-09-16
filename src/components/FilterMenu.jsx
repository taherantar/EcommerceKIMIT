import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
export default function FilterMenu({ categories, selectedCategory, getProducts, children }) {
    const filterProducts = (category) => {
    }
    return (
        <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" onClick={getProducts}>All</Button>
            {
                categories.map((category, index) =>
                    <Button variant="secondary" onClick={() => filterProducts(category)} key={index}>{category}</Button>
                )
            }
        </ButtonGroup>
    )
}

