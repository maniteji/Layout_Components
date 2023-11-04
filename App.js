// App.js or App.jsx
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from './toDoList';
import ToDoForm from './toDoForm';

export default function App() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ToDoList />
            <ToDoForm />
        </SafeAreaView>
    );
}

