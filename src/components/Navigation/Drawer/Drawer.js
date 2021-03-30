import React, { useState } from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import Button from "@material-ui/core/Button"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"

const useStyles = makeStyles({
  list: {
    width: "30vw",
  },
  fullList: {
    width: "auto",
  },
})

const TempDrawer = () => {
  const classes = useStyles()
  const [drawerState, setDrawerState] = useState(true)

  const closeDrawer = () => setDrawerState(false)

  const list = () => (
    <List className={classes.list}>
      <ListItem>
        <p>This is a test item</p>
      </ListItem>
    </List>
  )

  return (
    <div>
      <Drawer anchor={"right"} open={drawerState} onClose={closeDrawer}>
        {list()}
      </Drawer>
    </div>
  )
}

export default TempDrawer
