import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import { selectedAllProducts } from '../../redux/slice/getAllProductsSlice';

const Pagination = ({setCurrentPage }) => {
    const {total} = useSelector(selectedAllProducts)
    let totalButtons = Math.ceil(total / 12)
        
    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };

    return (
        <ReactPaginate
            pageCount={totalButtons}
            pageRangeDisplayed={5}
            marginPagesDisplayed={2}
            previousLabel={"<<"}
            nextLabel={">>"}
            onPageChange={handlePageClick}
            containerClassName="paginate"
            activeClassName="paginate_active"
            pageClassName="paginate_page"
            previousClassName="paginate_prev"
            nextClassName="paginate_next"
            breakClassName="paginate_break"
        />
    );
};

export default Pagination;
