import { Link } from 'react-router-dom';



const Home = () => {
    return (
        <div>
            ...
            {currentItems.map(item => (
                <Link to={`/product/${item.id}`} key={item.id}>
                    <div className="product-card">
                        ...
                    </div>
                </Link>
            ))}
            ...
        </div>
    );
};

export default Home;
