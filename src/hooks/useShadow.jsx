import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setHandleClick } from '../store/slice/handleClickSideBar';

export const useShadow = () => {
  const dispatch = useDispatch();
  const handleClickSideBar = useSelector((state) => state.handleClickSideBar);
  
  const handleClick = () => {
    dispatch(setHandleClick(false));
  }
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return {
    handleClick,
    handleClickSideBar
  }
}