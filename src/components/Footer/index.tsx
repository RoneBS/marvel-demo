import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi';

import { MainFooter, List } from './style';

import mLogo from '../../assets/m-logo.png';

const Footer: React.FC = () => {
  return (
    <>
      <MainFooter>
        <div>
          <img src={mLogo} alt="M logo" />
          <List>
            <ul>
              <li>ABOUT MARVEL</li>
              <li>HELP/FAQS</li>
              <li>CARRERS</li>
              <li>INTERNSHIPS</li>
            </ul>
          </List>
          <List>
            <ul>
              <li>ADVERSITING</li>
              <li>MARVELHQ.COM</li>
              <li>REDEEM DIGITAL COMICS</li>
            </ul>
          </List>
          <List>
            <ul>
              <li>MARVEL INSIDER</li>
              <li>Get Rewarded</li>
            </ul>
          </List>
          <List>
            <ul>
              <li>FOLLOW MARVEL</li>
              <li>
                <FiFacebook size={20} />
              </li>
              <li>
                <FiTwitter size={20} />
              </li>
              <li>
                <FiInstagram size={20} />
              </li>
              <li>
                <FiYoutube size={20} />
              </li>
            </ul>
          </List>
        </div>
      </MainFooter>
    </>
  );
};

export default Footer;
