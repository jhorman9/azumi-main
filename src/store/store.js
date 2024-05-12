import { configureStore } from '@reduxjs/toolkit'
import handleClickSideBar from './slice/handleClickSideBar';

export default configureStore({
  reducer: {
    handleClickSideBar
	}
});