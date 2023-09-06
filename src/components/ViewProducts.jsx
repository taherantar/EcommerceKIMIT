import Card from 'react-bootstrap/Card';
import { Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function ViewProducts({ products }) {
    return (
        <>
            {
                products.map((product) =>
                    <Col key={product.id} sm={12} md={6} lg={4} className="card-group">
                        <Card className="m-2">
                            <Card.Img variant="top" src={product.image} />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>{product.price} $</Card.Text>
                                <Card.Text>{product.count}</Card.Text>
                                <small className="text-muted">{product.brand}</small>
                            </Card.Body>
                            <Card.Footer className ="d-flex ms-6">
                                <Link to={`./${product.id}`} className="btn btn-secondary mx-1">View more</Link>
                                <Button variant="secondary" className="ms-1">Add to cart</Button>
                                <Link to={`./edit/${product.id}`} className="btn btn-secondary mx-1">Edit Product</Link>
                                <Button variant="secondary" className="mx-1">Delete</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                )
            }
        </>
    )
}
