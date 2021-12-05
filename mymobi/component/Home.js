import React,{Component} from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View,Image,Switch  } from 'react-native';

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    logo: {
      width: 166,
      height: 158,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
});

class Home extends Component {
    
    state = {
        modalVisible: false,
        isEnabled: false
      };

      toggleSwitch = () => {this.setState({isEnabled: !isEnabled});};
    
      setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }
    render(){
        const { modalVisible } = this.state;
        return(
            <View style={styles.container}>
                <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={this.state.isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={this.toggleSwitch}
        value={this.state.isEnabled}
      />
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        this.setModalVisible(!modalVisible);
                    }}
                    >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello World!</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => this.setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                        </View>
                    </View>
                    </Modal>
                    <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => this.setModalVisible(true)}
                    >
                    <Text style={styles.textStyle}>Show Modal</Text>
                    </Pressable>
                <Image
                    style={styles.logo}
                    source={{uri: 'https://i.ibb.co/pv8Kf4m/roseate.jpg'}}
                />
            </View>
        )
    }
}
export default Home;