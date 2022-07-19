import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import data from "./utils/data";

const ItemDetailContainer = () => {
    const [items, setItems] = useState([]);
    const promise = new Promise((resolve) => {
        setTimeout(() => resolve(data), 2000);
    });

    useEffect(() => {
        promise.then((res) => setItems(data[0]));
    }, []);
    return (
        <>
            <div className="mt-5">
                <ItemDetail items={items} />
            </div>
        </>
    );
};


export default ItemDetailContainer;