import React, { useState } from 'react';
import { Button, Overlay, Icon, Input } from '@rneui/themed';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

function ListMaker1000Start () {

  // INITIAL VALUES FOR TESTING
  const initTodos = [
    { text: 'Get milk', key: 1},
    { text: 'Drop off dry cleaning', key: 2},
    { text: 'Finish 669 homework', key: 3}
  ];

  // STATE VARIABLES AND THEIR UPDATERS
  const [todos, setTodos] = useState(initTodos);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [inputText, setInputText] = useState('');

  // DATA MODEL FUNCTIONS (CRUD)
  const createTodo = (todoText) => {
    //TBD
  }

  const updateTodo = (todo, newText) => { 
    //TBD
  }

  const deleteTodo = (todo) => {    
    //TBD
  }
  // END DATA MODEL

  // CUSTOM COMPONENT FOR DISPLAYING A SINGLE LIST ITEM
  function TodoListItem({item}) {
    return (
      <View style={styles.listItemView}>
        <View style={styles.li1}>
          <Text style={styles.listItemText}>{item.text}</Text>
        </View>
        <TouchableOpacity 
          style={styles.li2}  
        >
          <Icon 
            name="edit"
            type="font-awesome"
            color="black"
            size={25}
          />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.li3}
        >
          <Icon 
            name="trash"
            type="font-awesome"
            color="black"
            size={25}
          />
        </TouchableOpacity>
      </View>
    );
  }

  // MAIN UI
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          ListMaker 1000
        </Text>
      </View>
      <View style={styles.body}>
        <FlatList
          data={todos}
          renderItem={({item})=>{
            return (
              <TodoListItem item={item}/>
            );
          }}
        />
      </View>
      <View style={styles.footer}>
        <Button 
          size='lg' 
          color='#AAAACC'
          onPress={()=>{setOverlayVisible(true)}}
        >
          <Icon name='add' color='#444477' size={32}/>
        </Button>
      </View>

      {/* OVERLAY COMPONENT: SHOWN ON TOP WHEN visible==true */}
      <Overlay 
        isVisible={overlayVisible} 
        onBackdropPress={()=>setOverlayVisible(false)}
        overlayStyle={styles.overlayView}  
      >
        <Input
          placeholder='New Todo Item'
          value={inputText}
          onChangeText={(newText)=>setInputText(newText)}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-around', width:'80%'}}>
          <Button
            title="Cancel"
            onPress={()=>{
              setOverlayVisible(false)
            }}  
          />
          <Button
            title="Add Todo"
          />
        </View>
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    flex: 0.1,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: '20%',
    paddingBottom: '5%',
    backgroundColor: '#AAAACC'
  },
  headerText: {
    fontSize: 44,
    color: '#444477'
  },
  body: {
    flex: 0.5,
    width: '100%',
    paddingLeft: '5%',
    paddingTop: '5%'
  },
  listItemView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    padding: '1%',
  },
  li1: {
    flex: 0.8, 
    paddingRight: '3%'
  },
  li2: {
    flex: 0.1,
    backgroundColor: 'white'
  },
  li3: {
    flex: 0.1,
    backgroundColor: 'white'
  },
  listItemText: {
    fontSize: 24
  },
  footer: {
    flex: 0.2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  overlayView: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%'
  }
});

export default ListMaker1000Start;
// export default ListMaker1000Create;
// export default ListMaker1000Delete;
// export default ListMaker1000Final;