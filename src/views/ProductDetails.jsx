import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import i18n from "i18next";
import SiteNav from "../layout/SiteNav";
import Image from 'react-bootstrap/Image';
import { useContext } from "react";
import { ThemeContext } from "../contaxt/ThemeContext";

export default function ProductDetails() {
    const theme = useContext(ThemeContext);
    const params = useParams();

    let [product, setProduct] = useState({});

    function getSingleProduct() {
        fetch("http://localhost:2222/products/" + params.productId)
            .then(json => json.json())
            .then(res => setProduct(res))
    }

    useEffect(() => {
        getSingleProduct()

    }, [ ])

    return (
        <div className={`mainContent text-center ${i18n.language === "ar" && "rtl"} ${theme.theme === "dark" && "dark"}`}>
            <SiteNav />
            <div className="d-flex m-4">
                <Image src={product.thumbnail} thumbnail  className="w-25%" />
                <div className="m-4 ba-b--lighter-gray">
                    <h2>{product.title}</h2>
                    <h3>{product.category}</h3>
                    <p>{product.description}</p>
                    <h4>Price : {product.price}$</h4>
                </div>
            </div>
        </div>
    )
}
