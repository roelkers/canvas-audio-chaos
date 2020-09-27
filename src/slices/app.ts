import { createSlice } from '@reduxjs/toolkit' 
import { RootState } from '../store'

interface IAppState {
  actionButtonsOpen: boolean;
  action: string;
  mobile: boolean
  mobileDrawerOpen: boolean
}

const initialState : IAppState = 
    {
      actionButtonsOpen: false,
      action: '',
      mobile: false,
      mobileDrawerOpen: false 
    }

const canvasSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setOpen (state, action) {
      state.actionButtonsOpen = action.payload
    },
    setMobile (state, action) {
      state.mobile = action.payload
    },
    setMobileDrawerOpen (state, action) {
      state.mobileDrawerOpen = action.payload
    }
  }
})

export const selectIsSpeedDialOpen = (state: RootState) => state.app.actionButtonsOpen  
export const selectActionName = (state: RootState) => state.app.action  
export const selectIsMobile = (state: RootState) => state.app.mobile
export const selectIsMobileDrawerOpen = (state: RootState) => state.app.mobileDrawerOpen

// Extract the action creators object and the reducer
const { actions, reducer } = canvasSlice
// Extract and export each action creator by name
// Export the reducer, either as a default or named export
export const { setMobileDrawerOpen, setOpen, setMobile } = actions 

export default reducer

