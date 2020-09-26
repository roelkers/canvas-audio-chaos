import { useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsMobile, setMobile } from "../slices/app";

export function useWindowSize() {
  const dispatch = useDispatch() 
  const mobile = useSelector(selectIsMobile)
  useLayoutEffect(() => {
    function checkMobile() {
      if(window.innerWidth < 800) {
        dispatch(setMobile(true)) 
      }
      if(window.innerWidth > 800 ) {
        dispatch(setMobile(false)) 
      }
    }
    window.addEventListener('resize', checkMobile);
    checkMobile();
    return () => window.removeEventListener('resize', checkMobile);
  }, [dispatch]);
}
