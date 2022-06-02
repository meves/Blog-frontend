import { Pagination } from '@mui/material';
import React, { ChangeEvent, FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getUsersErrorSelector, getUsersIsFetchingSelector, getUsersSelector } from '../../redux/selectors/users-selector';
import { getUsers } from '../../redux/slices/usersSlice';

const Users: FC = (props) => {
    const users = useAppSelector(getUsersSelector);
    const isFetching = useAppSelector(getUsersIsFetchingSelector);
    const error = useAppSelector(getUsersErrorSelector);

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    const usersItems = users.map(user => (
        <div key={user.id}>
            <p>Username: {user.name}</p>
            <p>Location: {user.city} {user.country}</p>
        </div>
    ))

    const handleChange = (event: ChangeEvent<unknown>) => {
        
    }
    return (
        <div>
            <Pagination count={10} 
                        color="primary"
                        size="large"
                        showFirstButton
                        showLastButton
                        defaultPage={1}
                        siblingCount={3}
                        onChange={handleChange}
                        />
            { isFetching ? 'Loading...' : !error ? usersItems : 'Something went wrong' }
        </div>
    )
}

export default Users;
