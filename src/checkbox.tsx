import * as React from 'react'
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox'
// tslint:disable-next-line
import { Theme, withStyles, createStyles, StyledComponentProps } from '@material-ui/core/styles'

// 扩展
declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    status: {
      danger: string
    }
  }
  interface ThemeOptions {
    status: {
      danger: string
    }
  }
}

const styles = (theme: Theme) => createStyles({
  root: {
    color: theme.status.danger,
    '&$checked': {
      color: theme.status.danger
    }
  },
  checked: {}
})

export interface CustomCheckboxPropTypes extends CheckboxProps {
  classes: {
    root?: string,
    checked?: string
  }
}

const CustomCheckbox = (props: CustomCheckboxPropTypes) => (
  <Checkbox
    {...props}
    classes={{ root: props.classes.root, checked: props.classes.checked }}
  />
)

export default withStyles(styles)(CustomCheckbox)
