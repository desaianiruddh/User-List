import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';

import { fetchUserFromAPI } from '../../actions';

const Pagination = () => {
  const dispatch = useDispatch();
  const totalPages = useSelector((state) => state.empList.totalPages);
  return (
    <nav>
      <div className="pagination pagination-sm position-absolute end-50">
        <ReactPaginate
          previousLabel={<>&laquo;</>}
          nextLabel={<>&raquo;</>}
          pageCount={totalPages}
          onPageChange={(e) => dispatch(fetchUserFromAPI(e.selected + 1))}
          containerClassName="pagination"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousLinkClassName="page-link"
          nextLinkClassName="page-link"
          activeClassName="active"
        />
      </div>
    </nav>
  );
};

export default Pagination;
