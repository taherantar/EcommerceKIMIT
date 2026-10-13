import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
export default function FilterMenu({ categories, selectedCategory, getProducts, filterProducts, children }) {
    return (
        <ButtonGroup aria-label="Basic example">
            <Button variant={selectedCategory === "All" ? "primary" : "secondary"} onClick={getProducts}>All</Button>
            {
                categories.map((category, index) =>
                    <Button variant={selectedCategory === category ? "primary" : "secondary"} onClick={() => filterProducts(category)} key={index}>{category}</Button>
                )
            }
        </ButtonGroup>
    )
}
