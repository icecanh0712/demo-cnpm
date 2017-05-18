import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';
 const manHinh=Dimensions.get('window')

export default class HutechLott extends Component {
  constructor(props){
    super(props);
    this.state={
      Random:'',
      x:'',
      min:'1',
      max:'45',
      c1:'',
      c2:'',
      c3:'',
      c4:'',
      c5:'',
      c6:'',
    }
  }
  _ranDom(min,max){
    for(j=0;j<6;j++){
      if(j==0)
      {
        for( i=0;i<100;i++)
        {
          setTimeout( () => {this.setState({c1: Math.floor(Math.random() * (max - min)) + min})},100 );
        }
      }
      if(j==1)
      {
        for( i=0;i<100;i++)
        {
          setTimeout( () => {this.setState({c2: Math.floor(Math.random() * (max - min)) + min})},100 );
        }
      }
      if(j==2)
      {
        for( i=0;i<100;i++)
        {
          setTimeout( () => {this.setState({c3: Math.floor(Math.random() * (max - min)) + min})},100 );
        }
      }
      if(j==3)
      {
        for( i=0;i<100;i++)
        {
          setTimeout( () => {this.setState({c4: Math.floor(Math.random() * (max - min)) + min})},100);
        }
      }
      if(j==4)
      {
        for( i=0;i<100;i++)
        {
          setTimeout( () => {this.setState({c5: Math.floor(Math.random() * (max - min)) + min})},100);
        }
      }
      if(j==5)
      {
        for( i=0;i<100;i++)
        {
          setTimeout( () => {this.setState({c6: Math.floor(Math.random() * (max - min)) + min})},100 );
        }
      }
    }
  }
  _set0(){
    this.setState({c1:'',c2:'',c3:'',c4:'',c5:'',c6:''})
  }
  componentDidMount(){

  }
  render() {
    return (
      <View style={{flex:1}}>
            <View style={styles.Top}>
            <Image
              style={{width: manHinh.width*0.5, height:manHinh.height*0.15}}
              source={require('./img/hutech.png')}
              />

            </View>
            <View style={styles.Center}>

              <View style={styles.quad}>
                    <Text >Min: </Text>
                    <TextInput
                     style={styles.textintput}
                      onChangeText={(min) => this.setState({min})}
                      placeholder='Nhập vào Min'
                      value={this.state.min}
                    />
                    <Text > Max: </Text>
                    <TextInput
                     style={styles.textintput}
                      onChangeText={(max) => this.setState({max})}
                      placeholder='Nhập vào Max'
                      value={this.state.max}
                    />

              </View>
              <View style={styles.button}>
                      <TouchableOpacity  onPress={()=>{this._set0(), this._ranDom(parseInt(this.state.min),parseInt(this.state.max))}}>
                              <View style={styles.buttons}>
                                  <Text style={styles.textbt}>Start</Text>
                              </View>
                          </TouchableOpacity>
              </View>
            </View>
            <View style={styles.Bottom}>
                <View style={styles.kq}>
                    <View style={styles.so}>
                        <Image
                          style={styles.cau}
                          source={require('./img/cau.png')}
                          />
                          <View style={styles.sokq}>
                              <Text style={{textAlign:'center',fontSize:40,color:'black'}}>{this.state.c1}</Text>
                          </View>
                    </View>
                    <View style={styles.so}>
                        <Image
                          style={styles.cau}
                          source={require('./img/cau.png')}
                          />
                          <View style={styles.sokq}>
                              <Text style={{textAlign:'center',fontSize:40,color:'black'}}>{this.state.c2}</Text>
                          </View>
                    </View>
                    <View style={styles.so}>
                        <Image
                          style={styles.cau}
                          source={require('./img/cau.png')}
                          />
                          <View style={styles.sokq}>
                              <Text style={{textAlign:'center',fontSize:40,color:'black'}}>{this.state.c3}</Text>
                          </View>
                    </View>
                </View>
                <View style={styles.kq}>
                    <View style={styles.so}>
                        <Image
                          style={styles.cau}
                          source={require('./img/cau.png')}
                          />
                          <View style={styles.sokq}>
                              <Text style={{textAlign:'center',fontSize:40,color:'black'}}>{this.state.c4}</Text>
                          </View>
                    </View>
                    <View style={styles.so}>
                          <Image
                            style={styles.cau}
                            source={require('./img/cau.png')}
                            />
                            <View style={styles.sokq}>
                                <Text style={{textAlign:'center',fontSize:40,color:'black'}}>{this.state.c5}</Text>
                            </View>
                    </View>
                    <View style={styles.so}>
                          <Image
                            style={styles.cau}
                            source={require('./img/cau.png')}
                            />
                            <View style={styles.sokq}>
                                <Text style={{textAlign:'center',fontSize:40,color:'black'}}>{this.state.c6}</Text>
                            </View>
                    </View>
                </View>
            </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  Top: {
    flex: 0.15,
    alignItems: 'center',
  },
  Center:{
    flex: 0.25,
   justifyContent: 'flex-start',
//    alignItems: 'center',
    backgroundColor: 'white',
  },
  Bottom:{
    flex:0.6,
  //  backgroundColor:'skyblue'
  },
  sloGan:{
    fontSize:40,
    color:'red'
  },
  quad:{
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    backgroundColor:'white',
    flex:0.2/0.8,
  },
  kq:{
    flex:1,
    flexDirection:'row',
  },
  so:{
    flex:1/3,
    justifyContent:'center',
    alignItems:'center'
  },
  textintput:{
     height: 40,
     width:100,
     marginTop:10 ,
     borderColor: 'red',
      borderWidth: 1
  },
  cau:{
    width: 150,
    height:150,
    ...StyleSheet.absoluteFillObject,
  },
  sokq:{
    justifyContent:'center',
    alignItems:'center',
    paddingBottom:30,
    paddingLeft:25
  },
  button:{
    flex:0.2/0.8,
    justifyContent:'flex-end',
    alignItems:'center'
  },
  buttons:{
    justifyContent:'center',
    marginLeft:10,
    width:100,
    height:50,
    backgroundColor:'red'
},
textbt:{
  color:'white',
  textAlign:'center',
  fontSize:30,
}
});

AppRegistry.registerComponent('HutechLott', () => HutechLott);
