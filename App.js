import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';


export default function App() {
  const [getText,setText]=useState("-1")
  const[gess,setgess]=useState("0")
  const[rnum,setrnum]=useState(Math.floor(Math.random()*99)+1)
  const[round,setround]=useState(1)
  const[chance,setchance]=useState(1)
  const[attempt,setAttempts]=useState(5)
  const[points,setpoint]=useState([])
  const[reward,setreward]=useState(0)
  const[btndis,setbtndis]=useState(true)
  const[btnen,setbtnen]=useState(false)
  
  const startGame=()=>{
    setround(1)
    setchance(1)
    setAttempts(5)
    setpoint([])
    setreward(0)
    setText("-1")
    setgess("0")
    setrnum(Math.floor(Math.random()*99)+1)
    setbtndis(true)
    setbtnen(false)
  }
  const ChangeRound=()=>{
    setpoint([...points,reward])
    setText("-1")
    setgess("0")
    setbtndis(true)
    setbtnen(false)
    setround(round+1)
    setreward(0)
    setchance(1)
    setAttempts(5)
  }
  
  const buttonClicked=(txt)=>{

    if(round<=3){
      if(chance<=6){

        if(txt=='r'){
         setText("-1")
         setgess("0")
       }
       else if(txt=='g'){
         setchance(chance+1)
         console.log(rnum)
        const num1=parseInt(getText)
        setAttempts(attempt-1)
         if(num1==rnum){
           setgess("Your guess is right")
           setreward(reward+10)
          
         }else{
           setgess("your guess is wrong")
         }
         
       }
       else{
         if(getText=="-1"){
           const t=String(txt)
           setText(t)
         }else{
           const t=String(txt)
           setText(getText+t)
         }
         
       }
       if(chance==5 ){
         setbtndis(false)
         setbtnen(true)
         
       }
      }else{
         setchance(1)
         
       }
    }
    
    
    
  }
  return (
    <View style={styles.container}>
      <Text style={styles.st1}>Guess Number Game</Text>
      
     <View style={[round<4?{display:'none'}:{display:'flex'}]}>
       <Text style={{fontSize:40}}>Result</Text>
       <Text style={{fontSize:30}}>Points of Round 1:{points[0]}</Text>
       <Text style={{fontSize:30}}>Points of Round 2:{points[1]}</Text>
       <Text style={{fontSize:30}}>Points of Round 3:{points[2]}</Text>
     </View>
     
     <View style={[round>3?{display:'none'}:{display:'flex'}]}>
     <Text style={[styles.st2,{paddingLeft: 100}]}>Round {round}</Text>
     <Text style={{paddingLeft: 210,paddingBottom:20}}>Remaining Attempts:{attempt}</Text>
      <Text style={{marginBottom:30,paddingLeft:100}}>Input a Number</Text>
      <Text style={[(getText=="-1")?styles.hide:styles.show]}>{getText}</Text>
      <Text className="GUESS" style={[(gess=="0")?styles.hide1:styles.show1]}>{gess}</Text>
      <Text style={{marginBottom:30,paddingLeft:100}}>Total Points:{reward}</Text>
      
      
      
     </View>
      
      <View style={[round>3?{display:'none'}:{flexDirection:'row',flexWrap:'wrap',marginLeft:40}]}>
        <View style={{marginRight:30,width:70,marginBottom:10,color:"green"}} >
        <Button color="#ff5c5c" title="0" onPress={buttonClicked.bind(this,0)}/>
        </View>
        <View style={{marginRight:30,width:70,marginBottom:10}} >
        <Button color="green" title="1" onPress={buttonClicked.bind(this,1)}/>
        </View>
        <View style={{marginRight:30,width:70,marginBottom:10}} >
        <Button color="#0000A0" title="2" onPress={buttonClicked.bind(this,2)}/>
        </View>
        <View style={{marginRight:30,width:70,marginBottom:10}} >
        <Button color="#ff5c5c" title="3" onPress={buttonClicked.bind(this,3)}/>
        </View>
        <View style={{marginRight:30,width:70,marginBottom:10}} >
        <Button color="green" title="4" onPress={buttonClicked.bind(this,4)}/>
        </View>
        <View style={{marginRight:30,width:70,marginBottom:10}} >
        <Button color="#0000A0" title="5" onPress={buttonClicked.bind(this,5)}/>
        </View>
        <View style={{marginRight:30,width:70,marginBottom:10}} >
        <Button color="#ff5c5c" title="6" onPress={buttonClicked.bind(this,6)}/>
        </View>
        <View style={{marginRight:30,width:70,marginBottom:10}} >
        <Button color="green" title="7" onPress={buttonClicked.bind(this,7)}/>
        </View>
        <View style={{marginRight:30,width:70,marginBottom:10}} >
        <Button color="#0000A0" title="8" onPress={buttonClicked.bind(this,8)}/>
        </View>
        <View style={{marginRight:30,width:70,marginBottom:10}} >
        <Button  color="#ff5c5c" title="9" onPress={buttonClicked.bind(this,9)}/>
        </View>
        
      </View>
      <View style={[round>3?{display:'none'}:{flexDirection:'row',marginTop:5}]}>
        <View style={{marginRight:15,width:60,marginBottom:10}}>
        <Button disabled={btnen} color="#0000A0" style={{paddingRight:100}} title="Reset"onPress={buttonClicked.bind(this,'r')}/>
        </View>
        <View style={{marginRight:15,width:60,marginBottom:10}}>
        <Button disabled={btnen} color="#0000A0" title="Guess"onPress={buttonClicked.bind(this,'g')}/>
        </View>
        <View style={{marginRight:15,width:120,marginBottom:10}}>
        <Button disabled={btndis} color="#0000A0" title={round==3?"Show result":"Next Round"}onPress={ChangeRound.bind(this,'n')}/>
        </View>
        
        
      </View>
      <View style={[round>3?{display:'flex'}:{display:'none'}]}><Button color="#0000A0" onPress={startGame.bind(this)} title="Play Again"/></View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  show:{
    display:'flex',
    paddingLeft:130,
    marginTop:-20
  },
  hide:{
    display:'none'
  },
  show1:{
    display:'flex',
    paddingLeft:90,
    
  },
  hide1:{
    display:'none'
  },
  st1:{
    marginTop:-100,
    marginBottom:50,
    fontSize:30,
    
    
  },
  st2:{
    marginTop:-50,
    marginBottom:50,
    fontSize:30,
    
    
  }
});
