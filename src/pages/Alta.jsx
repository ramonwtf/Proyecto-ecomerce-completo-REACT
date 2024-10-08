import React from 'react'
import { useEffect } from 'react'
import Form from '../components/Form'
import { useContext } from 'react'
import ProductosContext from '../contexts/ProductosContext'
import TablaAlta from '../components/TablaAlta'

const Alta = () => {
  const {productos} =  useContext(ProductosContext)

  useEffect( () => {
    document.title = 'Tienda EIT - Alta (Carga de productos)'
  }, [])

  return (
      <>

        <Form productos={productos} />
        <TablaAlta producto={productos}/>

      </>
    
  )
}

export default Alta