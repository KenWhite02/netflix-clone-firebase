import React, { useState } from 'react';
import netflix from '../images/netflix.png';
import SigninScreen from './SigninScreen';
import './MainScreen.css';
import { motion } from 'framer-motion';
import {
  loginscreenAnimation,
  loginscreenTransition,
  animationOne,
  transitionOne,
  animationTwo,
  transitionTwo,
  animationThree,
  transitionThree,
  animationFour,
  transitionFour,
  animationLogo,
  transitionLogo,
  animationButton,
  transitionButton,
} from '../animations/loginScreen';

const MainScreen = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <motion.div
      initial='out'
      animate='in'
      variants={loginscreenAnimation}
      transition={loginscreenTransition}
      className='mainScreen'
    >
      <div className='mainScreen_background'>
        <motion.img
          initial='out'
          animate='in'
          variants={animationLogo}
          transition={transitionLogo}
          className='mainScreen_logo'
          src={netflix}
          alt='login'
        />
        <motion.button
          initial='out'
          animate='in'
          variants={animationButton}
          transition={transitionButton}
          className='mainScreen_button'
          onClick={() => setSignIn(true)}
        >
          Sign In
        </motion.button>
        <div className='mainScreen_gradient' />
      </div>
      <div className='mainScreen_body'>
        {signIn ? (
          <SigninScreen />
        ) : (
          <>
            <motion.h1
              initial='out'
              animate='in'
              variants={animationOne}
              transition={transitionOne}
            >
              Unlimited films, TV Shows, Programmes and more.
            </motion.h1>
            <motion.h2
              initial='out'
              animate='in'
              variants={animationTwo}
              transition={transitionTwo}
            >
              Watch anywhere. Cancel anytime
            </motion.h2>
            <motion.h3
              initial='out'
              animate='in'
              variants={animationThree}
              transition={transitionThree}
            >
              Ready to watch? Enter your email to create or restart your
              membership.
            </motion.h3>
            <motion.div
              initial='out'
              animate='in'
              variants={animationFour}
              transition={transitionFour}
              className='mainScreen_input'
            >
              <form>
                <input type='email' placeholder='Email Address' />
                <button
                  className='mainScreen_getStarted'
                  onClick={() => setSignIn(true)}
                >
                  GET STARTED
                </button>
              </form>
            </motion.div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default MainScreen;
