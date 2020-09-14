import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  myClass: {
    color: 'red'
  }
})

const Paragraph = ({ content }) => {
  const classes = useStyles()

  return <p className={classes.myClass}>{content}</p>
}

export default Paragraph
