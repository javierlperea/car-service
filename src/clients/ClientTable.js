// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Button, makeStyles, TableCell, TableRow } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  tableButton: {
    justifyContent: 'center'
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily,
    background: theme.background.primary.main,
    height: 26,
    margin: 0,
    width: '100%',
    minWidth: '5rem',
    borderRadius: '5px',
    fontSize: '14px',
    padding: '6px 12px',
    '&:hover': {
      background: theme.background.primary.light,
      color: theme.palette.primary.dark
    }
  }
}))

export const ClientTable = (row) => {
  const classes = useStyles()

  const handleEdit = (id) => {
    console.log('edit', id)
  }

  const handleDelete = (id) => {
    console.log('delete', id)
  }

  return (
        <>
        <TableRow key={row.name}>
            <TableCell align="center">{row.id}</TableCell>
            <TableCell align="center">{row.name}</TableCell>
            <TableCell align="center">{row.lastName}</TableCell>
            <TableCell align="center">{row.dni}</TableCell>
            <TableCell align="center">{row.cars}</TableCell>
            <TableCell> <Button className={classes.button} onClick={() => handleEdit(row.id)}>Edit</Button></TableCell>
            <TableCell align="center"><Button className={classes.button} onClick={() => handleDelete(row.id)}>Delete</Button></TableCell>
        </TableRow>
        </>
  )
}
