import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './pages/HomeScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainScreen from './pages/MainScreen';
import ProfileScreen from './pages/ProfileScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { AnimatePresence } from 'framer-motion';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className='app'>
      <Router>
        <AnimatePresence>
          {!user ? (
            <MainScreen />
          ) : (
            <Switch>
              <Route path='/profile'>
                <ProfileScreen />
              </Route>
              <Route exact path='/'>
                <HomeScreen />
              </Route>
            </Switch>
          )}
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;
