const HandleSort = (e) => {
    const sortType = e.target.value;
    const sortedItems = [...items];
    
    if (sortType === "price") {
        sortedItems.sort((a, b) => a.price - b.price);
    } else if (sortType === "stock") {
        sortedItems.sort((a, b) => a.stock - b.stock);
    }

    setItems(sortedItems);
    
    return (
    <div>
        <h1 className="handle_title">Products</h1>
        <select onChange={handleSort}>
            <option value="">Sort by</option>
            <option value="price">Price</option>
            <option value="stock">Stock</option>
        </select>
        ...
    </div>
);
};


export default HandleSort