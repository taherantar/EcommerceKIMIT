import { useContext, useEffect, useState } from "react";
import SiteNav from "../layout/SiteNav";
import { Container, Row, Col, Button } from "react-bootstrap";
import ViewProducts from "../components/ViewProducts";
import FilterMenu from "../components/FilterMenu";
import Spinner from 'react-bootstrap/Spinner';
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import "../Styles/Styles.scss";
import { ThemeContext } from "../contaxt/ThemeContext";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { getProducts as loadProducts, getCategories } from "../data";



export default function Products() {
    const { t } = useTranslation();
    const theme = useContext(ThemeContext)


    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All")

    let getProducts = () => {
        setProducts(loadProducts());
        setSelectedCategory("All");
    };

    const filterProducts = (category) => {
        setSelectedCategory(category);
    };

    const visibleProducts = selectedCategory === "All"
        ? products
        : products.filter((p) => p.category === selectedCategory);

    useEffect(() => {
        setCategories(getCategories());
        setProducts(loadProducts());

    }, []);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className={`text-center ${i18n.language === "ar" && "rtl"} ${theme.theme === "dark" && "dark"}`}>
            <SiteNav />
            <div className="m-4">
                <h2>{t('products')}</h2>
                <h3>{t(`number_of_products`)} : {visibleProducts.length}</h3>
                <div class="row">
                    <div class="col">{getProducts.categories}</div>
                </div>
                <Container>
                    <Row className="d-flex justify-content-center">
                        {
                            products.length > 0
                                ?
                                <>
                                    <Button variant="primary" onClick={handleShow}>
                                        Categories
                                    </Button>
                                    <Offcanvas show={show} onHide={handleClose}>
                                        <Offcanvas.Header closeButton>
                                            <Offcanvas.Title>Categories</Offcanvas.Title>
                                        </Offcanvas.Header>
                                        <Offcanvas.Body>
                                            <row>
                                                <Col className="m-4 d-flex flex-column align-center">
                                                    <FilterMenu className=""
                                                        categories={categories}
                                                        selectedCategory={selectedCategory}
                                                        getProducts={getProducts}
                                                        filterProducts={filterProducts}
                                                    />
                                                </Col>
                                            </row>
                                        </Offcanvas.Body>
                                    </Offcanvas>
                                    <ViewProducts products={visibleProducts} />
                                </>
                                :
                                <Spinner animation="border" role="status" className="m-4">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                        }
                    </Row>
                </Container>
            </div>
        </div>
    )
}
