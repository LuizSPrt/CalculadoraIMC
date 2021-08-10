import React, { useState } from 'react';
import { StyleSheet, Button,View, Text, TextInput,} from 'react-native';

export default props => {
  const [peso, setPeso] = useState('0');
  const [altura, setAltura] = useState('0');
  const [resultado, setResultado] = useState('0');
  const [resultadotexto, setResultadotexto] = useState("")

  function calcular(){ setResultado(peso/(altura*altura))

      if(resultado<18,5){
        setResultadotexto("Abaixo do Peso")
      }
          else if (resultado>=18.5 <= 24.9){
            setResultadotexto("Peso normal")}
  
              else if (resultado>=25 <=29.9){
                setResultadotexto("Sobrepeso")}
       
                 else if (resultado>=30 <=34.9){
                    setResultadotexto("Obesidade grau 1")}
    
    
                      else if (resultado>=35 <=39.9){
                          setResultadotexto("Obesidade grau 2")}
      
                            else (resultado>=40)
                                setResultadotexto("Obesidade grau 3 ou Mórbida")
     
  }
  


  return (
    <>
    <View style={styles.entradas}>
        <View style={styles.peso}>
            <TextInput
              style={styles.container}
              placeholder="Digite o peso (KG)"
              keyboardType="numeric"
              onChangeText={peso => setPeso(peso)}
          
   />
   </View>
      <View style={styles.altura}>
          <TextInput
              style={styles.container}
              placeholder="Digite a altura (m)"
              keyboardType="numeric"
              onChangeText={altura => setAltura(altura.replace(',','.'))}
  />
      </View>
  </View>


  <View style={styles.button}>
      <Button
          title="Calcular"
          onPress={calcular}
         
      />
 </View>


 
      <Text style={styles.imc}>
        IMC = {resultado}
      </Text>

      <Text style={styles.imctxt}>
         {resultadotexto}
      </Text>
    
    

   </>
    
  )
}


const styles = StyleSheet.create({
  container: {
      height:80,
      textAlign: 'center',
      justifyContent: 'center',
      backgroundColor: '#F5F5FF',
      fontSize:25,
  },


  peso: {
    marginTop:200
  },


  altura: {
    marginTop:15
  },


  entradas: {
    marginBottom:35
  },

  imc: {
    marginTop:20,
    color:'#0091FF',
    padding:20,
    fontSize:18,
    fontWeight:'bold',
    backgroundColor: '#F5FCFF',
    textAlign:'center'
  },

  imctxt: {
    color:'#0091FF',
    padding:30,
    marginTop: -25,
    fontSize:25,
    fontWeight:'bold',
    backgroundColor: '#F5FCFF',
    textAlign:'center'
  },


  button: {
    color:'white',
    padding:30,
    backgroundColor: 'white',

  }

  
});





