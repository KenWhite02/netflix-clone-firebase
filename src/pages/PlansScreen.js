import React from 'react';
import './PlansScreen.css';
import { packagePlans } from '../data/data';
import { motion } from 'framer-motion';
import {
  animationPlans,
  transitionPlans,
  animationRenewal,
  transitionRenewal,
} from '../animations/plansScreen';

const PlansScreen = () => {
  return (
    <div className='plansScreen'>
      <motion.p
        initial='out'
        animate='in'
        variants={animationRenewal}
        transition={transitionRenewal}
      >
        Renewal Date:
      </motion.p>
      {packagePlans.map((plan) => {
        const { id, subscription, quality } = plan;
        return (
          <motion.div
            initial='out'
            animate='in'
            variants={animationPlans}
            transition={transitionPlans}
            className='plansScreen_plan'
            key={id}
          >
            <div className='plansScreen_info'>
              <h5>{subscription}</h5>
              <h6>{quality}</h6>
            </div>
            <button>Subscribe</button>
          </motion.div>
        );
      })}
    </div>
  );
};

export default PlansScreen;
