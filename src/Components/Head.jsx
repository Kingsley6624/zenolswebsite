import React, {useRef} from "react";

import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PlaceIcon from '@mui/icons-material/Place';

import Headcompo from "./headcompo";
import Button from "./Button";
import logo from '../assets/icons/logoicon.png'

const Head = () => {
  return (
    <div className="flex justify-between px-[5%] ">
          <div className="flex items-center">
        <img src={logo} alt="" className="h-full w-[100px]"/>
        <span className="font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#dcb421] to-[#d39c01]">
          ZENOLS
        </span>
      </div>
      <div className="hidden lg:flex items-center gap-5">
        <Headcompo
          Icon={<PlaceIcon style={{ color: '#8B8B8B', fontSize: 40 }} />}
          text1="0012 Chiranci Street,"
          text2="Kano, Nigeria"
          style="font-medium text-[#d39c01] text-lg"
        />
        <Headcompo 
          Icon={<PhoneAndroidIcon style={{ color: '#8B8B8B', fontSize: 40 }} />}
          text1="Call Us Anytime"
          text2="+2348064845313"
          style="font-medium text-2xl text-[#d39c01]"
        />
       
      </div>
    </div>
  );
};

export default Head;
