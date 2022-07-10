import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import VistaProducto from './vistaProducto';
//import imagen from './1_kl_arroz.jpg';

const ListProducts = () => {
  const getProducts = () => {
    // conectar con el servidor
  }

  return (
    <ScrollView>
      <VistaProducto 
        name="Arroz" 
        image={require('./1_kl_arroz.jpg')}
        precio={1.5} 
        descripcion="1 kilo de arroz"
      >
      </VistaProducto>
    </ScrollView>
  )
}

export default ListProducts;
