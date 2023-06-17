import { StyleSheet, Text, View } from 'react-native';
import Tasks from './components/Tasks';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWapper}>
        <Text style={styles.sectionTitle}>Tarefas de Hoje!</Text>
        
        <View style={styles.itens}>
          <Tasks text={'Tarefa 1'} />
          <Tasks text={'Tarefa 2'} />
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#526D82',    
  },
  tasksWapper:{
    paddingTop: 80,
    paddingHorizontal:20,
  },
  sectionTitle:{
     fontSize:24,
     fontWeight:'bold',
  },
  itens:{},
});
