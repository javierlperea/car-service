// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core'
import { helpHttp } from '../../helpers/helpHttp'
import { Loader } from '../loader/Loader'
import { ServiceCard } from './ServiceCard'
import { ErrorScreen } from '../../errors/ErrorScreen'

const useStyles = makeStyles((theme) => ({
  servicesContainer: {
    background: theme.background.secondary.light,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem 4rem',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    }
  }
}))

export const Services = () => {
  const [dataApi, setDataApi] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const classes = useStyles()

  const url = 'http://localhost:3008/services'

  useEffect(() => {
    setLoading(true)

    helpHttp().get(url).then((res) => {
      if (!res.err) {
        setDataApi(res)
        setError(null)
        setLoading(false)
      } else {
        setDataApi(false)
        setError(res.error)
        setLoading(false)
      }

      setLoading(false)
    })
  }, [url])

  return (
    <div className={classes.servicesContainer}>
        {loading && <Loader />}
        {!dataApi && error && <ErrorScreen error={error} /> }
        { dataApi && dataApi.map(data => (
          <ServiceCard
            key={data.id}
            {...data}
          />
        ))}
    </div>
  )
}
