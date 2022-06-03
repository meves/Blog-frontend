import { Pagination } from '@mui/material';
import React, { ChangeEvent, FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getCountUsersSelector, getPageUsersSelector, getUsersErrorSelector, getUsersIsFetchingSelector, getUsersSelector } from '../../redux/selectors/users-selector';
import { getUsers } from '../../redux/slices/usersSlice';

const Users: FC = (props) => {
    // get data from state
    const users = useAppSelector(getUsersSelector);
    const isFetching = useAppSelector(getUsersIsFetchingSelector);
    const error = useAppSelector(getUsersErrorSelector);
    const currentPage = useAppSelector(getPageUsersSelector);
    const currentCount = useAppSelector(getCountUsersSelector);
    // when component has mounted get users
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getUsers(currentPage, currentCount));
    }, [dispatch]);
    // when click on page number
    const handleChange = (event: ChangeEvent<unknown>, page: number) => {
        dispatch(getUsers(page, currentCount));
    }
    // users to be displayed
    const usersItems = users?.map(user => (
        <div key={user.id}>
            <p>Username: {user.name}</p>
            <p>Location: {user.city} {user.country}</p>
        </div>
    ))

    return (
        <div>
            <Pagination count={10} 
                        color="primary"
                        size="large"
                        showFirstButton
                        showLastButton
                        page={currentPage}
                        siblingCount={1}
                        onChange={handleChange}
                        />
            { isFetching ? 'Loading...' : !error ? usersItems : 'Something went wrong' }
        </div>
    )
}

export default Users;
