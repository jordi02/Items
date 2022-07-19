const ItemDetail = ({ item }) => {
    return (
        <div className="card" style={{ width: "15rem" }}>
            <img className="card-img-top" src={item.pictureUrl} alt="Card image cap" />
            <div className="card-body d-flex flex-column justify-content-center">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{`${item.stock} Disponibles!`}</p>
                <p className="card-text">{`$${item.price}`}</p>
            </div>
        </div>
    );
};

export default ItemDetail;