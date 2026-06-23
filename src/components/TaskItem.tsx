import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import {Task} from "../types/Task";


interface Props {
 task: Task;
 onToggle:(id:string)=>void;
 onDelete:(id:string)=>void;
 onPress:(task:Task)=>void;
}


export default function TaskItem({
 task,
 onToggle,
 onDelete,
 onPress
}:Props){

return (
  <TouchableOpacity
    style={[
      styles.card,
      task.completed ? styles.done : styles.pending
    ]}
    onPress={()=>onPress(task)}
  >

    <Text
      style={[
        styles.title,
        task.completed && styles.completedTitle
      ]}
    >
      {task.title}
    </Text>


    <Text style={styles.description}>
      {task.description}
    </Text>


    <Text
      style={
        task.completed
        ? styles.greenText
        : styles.redText
      }
    >
      {task.completed ? "✓ Done" : "○ Not done"}
    </Text>


    <View style={styles.buttons}>


      <TouchableOpacity
        style={styles.completeBtn}
        onPress={()=>onToggle(task.id)}
      >
        <Text>
          {task.completed ? "Undo" : "Complete"}
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.deleteBtn}
        onPress={()=>onDelete(task.id)}
      >
        <Text>
          Delete
        </Text>
      </TouchableOpacity>


    </View>


  </TouchableOpacity>
)

}


const styles = StyleSheet.create({

card:{
  padding:18,
  marginVertical:8,
  borderRadius:20,
  borderWidth:1,
},

done:{
  backgroundColor:"#e9f9ee",
  borderColor:"#4CAF50"
},

pending:{
  backgroundColor:"#fff0f0",
  borderColor:"#ff5252"
},


title:{
  fontSize:18,
  fontWeight:"700",
  marginBottom:8
},


completedTitle:{
  textDecorationLine:"line-through",
  color:"#777"
},


description:{
  color:"#555",
  marginBottom:10
},


greenText:{
  color:"#2e7d32",
  fontWeight:"700"
},


redText:{
  color:"#d32f2f",
  fontWeight:"700"
},


buttons:{
  flexDirection:"row",
  justifyContent:"space-between",
  marginTop:15
},


completeBtn:{
  padding:10,
  borderRadius:12,
  backgroundColor:"#ddd"
},


deleteBtn:{
  padding:10,
  borderRadius:12,
  backgroundColor:"#ffd6d6"
}

});