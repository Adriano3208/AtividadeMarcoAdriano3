
import { useState } from 'react';
import { View } from 'react-native';
import { Paragraph, TextInput } from 'react-native-paper';
import { styles } from '../utils/styles';


export default function RegisterScreen() {
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();


  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Paragraph>Realize o seu  {nome}</Paragraph>
        <TextInput
            label={"E-mail"} 
            placeholder="Digite seu e-mail"
            value={email}
        />
            
        <TextInput
            placeholder="Digite seu nome"
            secureTextEntry={true}//texto parece senha
            value={senha}
        />
      </View>
    </View>
  );
}


