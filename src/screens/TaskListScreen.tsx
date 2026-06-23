import React,{useEffect,useState} from "react";

import {
View,
Text,
TextInput,
FlatList,
StyleSheet,
Alert,
TouchableOpacity
} from "react-native";


import TaskItem from "../components/TaskItem";

import {Task} from "../types/Task";

import {
saveTasks,
loadTasks
} from "../storage/taskStorage";


import {fetchTodos} from "../services/api";



export default function TaskListScreen({navigation}:any){


const [tasks,setTasks]=useState<Task[]>([]);

const [title,setTitle]=useState("");

const [description,setDescription]=useState("");

const [search,setSearch]=useState("");

const [apiTasks,setApiTasks]=useState<any[]>([]);



useEffect(()=>{

load();

fetchApi();

},[]);



useEffect(()=>{

saveTasks(tasks);

},[tasks]);



const load=async()=>{

const data=await loadTasks();

setTasks(data);

}



const fetchApi=async()=>{

const data=await fetchTodos();

setApiTasks(data);

}



const addTask=()=>{


if(!title.trim()){

Alert.alert("Title required");

return;

}



const newTask:Task={

id:Date.now().toString(),

title,

description,

completed:false,

createdAt:new Date().toLocaleDateString()

};



setTasks([
...tasks,
newTask
]);


setTitle("");

setDescription("");

}



const toggleTask=(id:string)=>{


setTasks(
tasks.map(t=>

t.id===id
?
{
...t,
completed:!t.completed
}
:t

)
)

}



const deleteTask=(id:string)=>{


setTasks(
tasks.filter(t=>t.id!==id)
)

}



const filtered=tasks.filter(t=>

t.title
.toLowerCase()
.includes(search.toLowerCase())

)



return (

<View style={styles.container}>


<TextInput
placeholder="Search"
style={styles.input}
value={search}
onChangeText={setSearch}
/>



<TextInput
placeholder="Title"
style={styles.input}
value={title}
onChangeText={setTitle}
/>



<TextInput
placeholder="Description"
style={styles.input}
value={description}
onChangeText={setDescription}
/>



<TouchableOpacity
style={styles.addButton}
onPress={addTask}
>

<Text style={styles.addButtonText}>
＋ Add Task
</Text>

</TouchableOpacity>




<FlatList

data={filtered}

keyExtractor={item=>item.id}


ListEmptyComponent={
<Text>No tasks available</Text>
}


renderItem={({item})=>

<TaskItem

task={item}

onToggle={toggleTask}

onDelete={deleteTask}

onPress={(task)=>
navigation.navigate(
"Details",
{task}
)
}

/>

}

/>



<Text style={styles.apiTitle}>
API Todos
</Text>



{
apiTasks.map(item=>

<Text 
key={item.id}
style={styles.apiItem}
>
• {item.title}
</Text>

)
}



</View>

)

}



const styles=StyleSheet.create({

container:{
flex:1,
padding:20
},


input:{
borderWidth:1,
padding:10,
margin:5,
borderRadius:12
},


addButton:{
backgroundColor:"#e0e0e0",
paddingVertical:14,
borderRadius:25,
alignItems:"center",
marginTop:10,
marginBottom:15
},


addButtonText:{
color:"rgba(0, 0, 0, 0.76)",
fontSize:16,
fontWeight:"700"
},


apiTitle:{
fontSize:18,
fontWeight:"700",
marginTop:15
},


apiItem:{
marginTop:5,
color:"#555"
}


});