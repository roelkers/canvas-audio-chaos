import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  grid: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  label: {
    fontSize: theme.typography.h6.fontSize
  },
  input: {
    width: 60,
  },
}))

export default useStyles