import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { setMobile } from "../slices/app";

export function useWindowSize() {
  const dispatch = useDispatch() 
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
