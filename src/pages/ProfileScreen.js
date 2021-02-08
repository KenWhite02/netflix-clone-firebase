import React from 'react';
import Nav from '../components/Nav';
import './ProfileScreen.css';
import avatar from '../images/avatar.png';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import { motion } from 'framer-motion';
import {
  animationOne,
  transitionOne,
  animationButton,
  transitionButton,
  animationAvatar,
  transitionAvatar,
  animationEmail,
  transitionEmail,
  animationPlans,
  transitionPlans,
} from '../animations/profileScreen';
import PlansScreen from './PlansScreen';

const ProfileScreen = () => {
  const user = useSelector(selectUser);

  return (
    <div className='profileScreen'>
      <Nav />
      <div className='profileScreen_body'>
        <motion.h1
          initial='out'
          animate='in'
          variants={animationOne}
          transition={transitionOne}
        >
          Edit Profile
        </motion.h1>
        <div className='profileScreen_info'>
          <motion.img
            initial='out'
            animate='in'
            variants={animationAvatar}
            transition={transitionAvatar}
            src={avatar}
            alt='avatar'
          />
          <div className='profileScreen_details'>
            <motion.h2
              initial='out'
              animate='in'
              variants={animationEmail}
              transition={transitionEmail}
            >
              {user.email}
            </motion.h2>
            <div className='profileScreen_plans'>
              <motion.h3
                initial='out'
                animate='in'
                variants={animationPlans}
                transition={transitionPlans}
              >
                Plans
              </motion.h3>
              <PlansScreen />
              <motion.button
                initial='out'
                animate='in'
                variants={animationButton}
                transition={transitionButton}
                onClick={() => auth.signOut()}
                className='profileScreen_signOut'
              >
                Sign Out
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
