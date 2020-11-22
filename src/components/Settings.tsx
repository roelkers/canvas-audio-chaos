import SpeedDialButtons from './SpeedDialButtons'
import React from 'react'
import DesktopDrawer from './DesktopDrawer'
import { selectIsMobile } from '../slices/app'
import { useSelector } from 'react-redux'
import MobileDrawer from './MobileDrawer'
import DrawerContent from './DrawerContent'
import Onboarding from './Onboarding'

const Settings = () => {
  const mobile = useSelector(selectIsMobile)
  return mobile ?
    (
      <>
        <MobileDrawer >
          <DrawerContent />
        </MobileDrawer>
        <SpeedDialButtons />
        <Onboarding />
      </>
    ) :
    (
      <>
        <DesktopDrawer >
          <DrawerContent />
        </DesktopDrawer>
        <SpeedDialButtons />
        <Onboarding />
      </>
    )
}

export default Settings