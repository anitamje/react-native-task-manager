import React from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";


export default function TaskDetailsScreen({route}:any){

const {task}=route.params;


return (

<View style={styles.container}>


<View
style={[
  styles.card,
  task.completed 
  ? styles.done 
  : styles.pending
]}
>


<Text style={styles.title}>
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
{task.completed 
? "✓ Completed"
: "○ Pending"}
</Text>


<Text style={styles.date}>
Created: {task.createdAt}
</Text>


</View>


</View>

)

}


const styles=StyleSheet.create({

container:{
flex:1,
padding:20,
backgroundColor:"#fafafa"
},


card:{
padding:25,
borderRadius:25,
borderWidth:1,
marginTop:20
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
fontSize:26,
fontWeight:"700",
marginBottom:15
},


description:{
fontSize:17,
color:"#555",
marginBottom:20
},


greenText:{
fontSize:16,
fontWeight:"700",
color:"#2e7d32",
marginBottom:15
},


redText:{
fontSize:16,
fontWeight:"700",
color:"#d32f2f",
marginBottom:15
},


date:{
color:"#777",
fontSize:14
}

});