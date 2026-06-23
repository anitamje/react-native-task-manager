import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import TaskListScreen from "../screens/TaskListScreen";
import TaskDetailsScreen from "../screens/TaskDetailsScreen";


const Stack=createNativeStackNavigator();


export default function AppNavigator(){

return (

<Stack.Navigator>

<Stack.Screen
name="Tasks"
component={TaskListScreen}
/>


<Stack.Screen
name="Details"
component={TaskDetailsScreen}
/>


</Stack.Navigator>


)

}