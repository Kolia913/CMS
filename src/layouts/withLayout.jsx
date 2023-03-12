import React from 'react'
import MainLayout from './MainLayout/MainLayout'

const withLayout = (Component) => (props) => {
  return (
    <MainLayout>
      <Component {...props} />
    </MainLayout>
  )
}

export default withLayout