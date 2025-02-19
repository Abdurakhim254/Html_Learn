import React from "react";
import { useParams } from "react-router-dom";
import { footerlist } from "../../config/footer.js";

export const Mebel = () => {
    const { title } = useParams();
    const data = footerlist.find((item) => item.title === title);

    if (!data) {
        return <h1>Product not found</h1>;
    }

    return (
        <div>
            <h1>{data.title}</h1>
            <img src={data.img} alt={data.title} style={{ width: "200px" }} />
            <p>{data.subtitle}</p>
            <p>Price: {data.price}</p>
            {data.saleprice && <p>Sale Price: {data.saleprice}</p>}
        </div>
    );
};
