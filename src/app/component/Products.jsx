import React, { useEffect } from 'react';
import Loader from './Loader';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

const Products = () => {
    const [isLoading, setLoading] = React.useState(true);
    const [products, setProducts] = React.useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleFavouriteClick = (id) => {
        setProducts(prevProducts => {
            return prevProducts.map(product => {
                if (product.id === id) {
                    return {
                        ...product,
                        favourite: !product.favourite
                    };
                }
                return product;
            });
        });
    };

    return (
        <div className='flex justify-center items-center'>
            {isLoading ? (
                <Loader />
            ) : (
                <ul className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8'>
                    {products.length > 0 ? (
                        products.map(product => ( 
                            <li key={product.id}>
                                <img className='w-[168px] h-[227px] md:w-[180px] md:h-[180px] text-center' src={product.image} alt={product.title} />
                                <div className='flex justify-between items-center mt-2'>
                                    <p className='font-semibold text-sm'>{product.title.slice(0, 15)}</p>
                                    <button onClick={() => handleFavouriteClick(product.id)}>
                                        {product.favourite ? <FavoriteOutlinedIcon sx={{ color: 'red' }} /> : <FavoriteBorderOutlinedIcon />}
                                    </button>
                                </div>
                                <p className='text-gray-600 text-xs font-normal'>
                                    <a className='underline'> Sign in</a> or Create an account to see pricing
                                </p>
                            </li>
                        ))
                    ) : (
                        <li>No products available</li>
                    )}
                </ul>
            )}
        </div>
    );
};

export default Products;
