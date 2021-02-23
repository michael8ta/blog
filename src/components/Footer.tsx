import React, { FC, ReactElement } from 'react'
import style from '../../styles/Footer.module.css'
import { Typography } from '@material-ui/core'

export const Footer: FC = ({}): ReactElement => {
  return (
    <div className={style.footer}>
      <Typography variant="body1" display="inline" className={style['footer-content']}>
        Copyright &copy; 2021,{' '}
        <a href="http://www.github.com/michael8ta" target="_blank" rel="noreferrer">
          michael8ta
        </a>
      </Typography>
    </div>
  )
}
