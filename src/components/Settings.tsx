import SpeedDialButtons from './SpeedDialButtons'
import React from 'react'
import DesktopDrawer from './DesktopDrawer'
import { selectIsMobile } from '../slices/app'
import { useSelector } from 'react-redux'
import MobileDrawer from './MobileDrawer'
import DrawerContent from './DrawerContent'

const Settings = () => {
  const mobile = useSelector(selectIsMobile)
  return mobile ?
    (
      <>
        <MobileDrawer >
          <DrawerContent />
        </MobileDrawer>
        <SpeedDialButtons />
      </>
    ) :
    (
      <>
        <DesktopDrawer >
          <DrawerContent />
        </DesktopDrawer>
        <SpeedDialButtons />
      </>
    )
}

export default Settings