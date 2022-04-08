import React, { useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import EmptyEmployee from './components/EmptyEmployee/EmptyEmployee';
import { fetchUserFromAPI } from './actions';
const ProfileList = React.lazy(() =>
  import('./components/ProfileList/ProfileList')
);

const App = () => {
  const userList = useSelector((state) => state.empList.empListData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserFromAPI(1));
  }, [dispatch]);
  return (
    <div className="App container">
      {userList.length === 0 ? (
        <EmptyEmployee />
      ) : (
        <Suspense
          fallback={
            <div className="text-center fw-bold fs-5 pt-5 pb-5">
              Just Sec...Page is Loading
            </div>
          }
        >
          <ProfileList userList={userList} />
        </Suspense>
      )}
    </div>
  );
};

export default App;
