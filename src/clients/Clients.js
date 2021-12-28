/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react'
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  makeStyles,
  TableCell
} from '@material-ui/core'
import { helpHttp } from '../helpers/helpHttp'
import { ClientTable } from './ClientTable'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: '100vh',
    background: theme.background.secondary.light
  },
  evaluationTableContainer: {
    maxWidth: 1264,
    height: '74vh',
    width: '100%',
    margin: '2rem'
  },
  content: ({ loading }) => ({
    width: '100%',
    maxHeight: '100%',
    minHeight: loading ? 400 : 'initial'
  }),
  tableContainer: ({ loading }) => ({
    overflow: 'auto',
    width: '100%',
    maxHeight: '100%',
    minHeight: loading ? 400 : 'initial',
    height: 'auto',
    border: '1px solid #DFDFDA',
    borderRadius: '8px',
    boxSizing: 'border-box',
    backgroundColor: theme.background.secondary.main,
    scrollSnapType: 'both mandatory',
    scrollPaddingTop: '136px',
    scrollPaddingLeft: '70px',
    '& th': {
      borderRight: '1px solid #DFDFDA',
      borderBottom: '1px solid #DFDFDA',
      '&:first-child': {
        position: 'sticky',
        left: 0
      }
    },
    '& td': {
      scrollSnapAlign: 'start',
      borderBottom: '1px solid #DFDFDA',
      borderRight: '1px solid #DFDFDA'
    },
    '& td:first-child': {
      position: 'sticky',
      left: 0
    },
    '& td:last-child, th:last-child': {
      borderRight: 0
    },
    '& tr:last-child td': {
      borderBottom: 0
    }
  }),
  table: {
    width: '100%',
    maxHeight: '100%',
    margin: 'auto',
    borderSpacing: 0,
    minWidth: 650,
    border: 0,
    borderCollapse: 'separate',
    tableLayout: 'fixed',
    [theme.breakpoints.down('xs')]: {
      minWidth: 0
    }
  },
  pagination: {
    color: '#6D7878'
  },
  tableHead: {
    '& th': {
      position: 'sticky',
      top: 0
    }
  },
  tableCell: {
    textAlign: 'center'
  },
  editableTableCell: {
    cursor: 'pointer',
    transition: '.2s all ease-in-out',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)'
    }
  },
  mobileInfo: {
    display: 'flex',
    flexDirection: 'row',
    borderBottom: '1px solid #DFDFDA',
    padding: '16px 0',
    margin: '0 16px',
    flex: 1,
    justifyContent: 'space-between',
    '& > div': {
      flex: '1 1 0px',
      width: 0,
      justifyContent: 'center'
    },
    '&:last-child': {
      borderBottom: 0
    }
  },
  mobileGradingCell: {
    display: 'flex',
    alignItems: 'center'
  },
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
    borderRadius: '10px',
    fontSize: '14px',
    padding: '6px 12px',
    '&:hover': {
      background: theme.background.primary.light,
      color: theme.palette.primary.dark
    }
  }
}))

export const Clients = () => {
  const [openRow, setOpenRow] = useState(null)
  const [dataApi, setDataApi] = useState([])
  // const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const classes = useStyles({ loading })

  const url = 'http://localhost:3008/owners'

  useEffect(() => {
    setLoading(true)

    helpHttp().get(url).then((res) => {
      if (!res.err) {
        setDataApi(res)
        // setError(null)
        setLoading(false)
      } else {
        setDataApi(res)
        // setError(res.error)
        setLoading(false)
      }

      setLoading(false)
    })
  }, [url])

  return (
    <div className={classes.container}>
      <div className={classes.evaluationTableContainer}>
        <div className={classes.content}>
          <TableContainer className={classes.tableContainer}>
            {
              (dataApi.length > 0) &&
                <Table
                  className={classes.table}
                  aria-label="Clients"
                >
                  <TableHead className={classes.tableHead}>
                    <TableRow className={classes.tableRow}>
                      <TableCell align="center">ID</TableCell>
                      <TableCell align="center">Name</TableCell>
                      <TableCell align="center">Last Name</TableCell>
                      <TableCell align="center">DNI</TableCell>
                      <TableCell align="center">Cars</TableCell>
                      <TableCell align="center"></TableCell>
                      <TableCell align="center"></TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    { dataApi &&
                      dataApi.map((row) => (
                        <ClientTable
                          key={row.id}
                          title={row.title}
                          isMobile
                          {...row}
                        />
                      ))
                    }
                  </TableBody>
                </Table>
            }
            </TableContainer>
        </div>
      </div>
    </div>
  )
}
