import { Dialog, DialogContent, Fab, useMediaQuery, useTheme } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectOnboardingOpen, setOnboardingOpen, setOpen } from '../slices/app';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import { mdiClose, mdiHelpCircleOutline, mdiArrowLeft, mdiArrowRight } from '@mdi/js/';
import Icon from '@mdi/react'
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import Onboarding_Img_1 from '../assets/onboarding_1.png'
import Onboarding_Img_2 from '../assets/onboarding_2.png'
import Onboarding_Img_3 from '../assets/onboarding_3.png'
import Onboarding_Img_4 from '../assets/onboarding_4.png'
import Onboarding_Img_5 from '../assets/onboarding_5.png'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

interface StepperProps {
  activeStep: number
  setActiveStep: React.Dispatch<React.SetStateAction<number>> 
}

function DotsMobileStepper(props: StepperProps) {
  const classes = useStyles();
  const theme = useTheme();
  const { activeStep, setActiveStep } = props
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <MobileStepper
      variant="dots"
      steps={6}
      position="static"
      activeStep={activeStep}
      className={classes.root}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
          Next
          <Icon path={mdiArrowRight} size={1} />
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          <Icon path={mdiArrowLeft} size={1} />
          Back
        </Button>
      }
    />
  );
}

const titleStyles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

export interface DialogTitleProps extends WithStyles<typeof titleStyles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(titleStyles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <Icon path={mdiClose} size={1}/>
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const dialogStyles = makeStyles((theme) => {
  return {
    root: {

    },
    button: {
      zIndex: 3,
      position: 'absolute',
      left: theme.spacing(2),
      top: theme.spacing(10),
    },
    stepper: {
      margin: '0 auto'
    }
  }
})

const dialogSteps = [
  { 
    title: 'Welcome to Waveism! Here are some tips to get you started:',
    textContent: 'You can drag Nodes from the bottom onto the canvas. The Hexagon you start with and any other hexagon will send out a wave, that will trigger another Node and play its sound.',
    src: Onboarding_Img_3 
  },
  { 
    title: 'Colors and groups',
    textContent: 'Every Node on the canvas belongs to one or more groups. These are indicated by the fill color. Only Nodes from the same group will trigger each other!',
    src: Onboarding_Img_2
  },
  { 
    title: 'The Action Buttons',
    textContent: 'On the top left you can access actions with the "+" Button. Their function is from left to right (1) Undo, (2) Redo, (3) Copy and paste selected Node, (4) Delete selected Node, (5) Save selected node to palette and save it to the browsers storage (To reuse it in another patch).',
    src: Onboarding_Img_4
  },
  { 
    title: 'Hexagons and Circles',
    textContent: 'Hexagons and Circles are the most simply objects in waveism. A hexagon will send out a wave in periodic intervals. A circle never sends out a wave but can get triggered by a hexagon.',
    src: Onboarding_Img_3
  },
  { 
    title: 'Squares and Triangles',
    textContent: `Squares are special objects in waveism. They will react to an incoming wave and, if it belongs to an object of their group send out a wave on their own. Triangles share 
      basically the behaviour of the Circle and the Hexagon, meaning they will send out waves in periodic intervals and on reaction, whichever happens first.`,
    src: Onboarding_Img_1 
  },
  { 
    title: 'Settings',
    textContent: 'In the settings on the right (on mobile double tap a node to open settings) you can configure the trigger options. You can change an objects shape and their groups. Also you can configure the speed of the wave (given in pixels/second). Advanced users can also configure the sound of the node.',
    src: Onboarding_Img_5 
  },
]

export default function Onboarding () {
  const open = useSelector(selectOnboardingOpen)
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const dispatch = useDispatch()
  const classes = dialogStyles()
  const [activeStep, setActiveStep] = React.useState(0);
  const handleClickOpen = () => {
    console.log("open")
    dispatch(setOnboardingOpen(true));
  };
  const handleClose = () => {
    dispatch(setOnboardingOpen(false));
  };

  return (
    <React.Fragment>
    <Fab size='small' className={classes.button} onClick={handleClickOpen}><Icon path={mdiHelpCircleOutline} size={1} /></Fab>
    <Dialog open={open} onClose={handleClose} >
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        {dialogSteps[activeStep].title}
      </DialogTitle>
      <DialogContent dividers>
      <img src={dialogSteps[activeStep].src} />
      <Typography gutterBottom>
        {dialogSteps[activeStep].textContent}
          </Typography>
      </DialogContent>   
      <DotsMobileStepper activeStep={activeStep} setActiveStep={setActiveStep} />
    </Dialog>
  </React.Fragment>
  )
}