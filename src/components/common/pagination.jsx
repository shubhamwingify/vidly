import React, {Component} from "react";
import _ from 'lodash';
import PropTypes from 'prop-types';

class Pagination extends Component {
    render() {
        const {itemsCount, pageSize, currentPage, onPageChange} = this.props;
        const pagesCount = Math.ceil(itemsCount / pageSize);

        if (pagesCount < 2) {
            return null;
        }

        const pages = _.range(1, pagesCount + 1);

        return (
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {pages.map(page => (
                        <li className={page === currentPage ? 'page-item active' : 'page-item'} key={page}>
                            <a className="page-link" onClick={() => onPageChange(page)} href="javascript:void(0);">{page}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
}

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
}

export default Pagination;
