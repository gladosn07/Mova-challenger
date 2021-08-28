import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

export default function PaginationRounded() {
    return (
        <div>
            <Pagination count={10} variant="outlined" shape="rounded" />
        </div>
    );
}
