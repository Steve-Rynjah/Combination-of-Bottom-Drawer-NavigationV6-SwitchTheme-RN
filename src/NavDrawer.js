import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer'
import {MainContext} from './Context/ContextProvider'
import { MaterialIcons } from '@expo/vector-icons';

export const NavDrawer = (props) =>{
    const paperTheme = useTheme();
    const {toggleTheme} = useContext(MainContext)
    
    return(
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection: 'row', marginTop: 15}}>
                            <Avatar.Image 
                                size={100}
                                source={{uri: 'https://cdn.countryflags.com/thumbs/germany/flag-3d-round-250.png'}}
                                />
                                <View style={{marginLeft: 15}}>
                                    <Title style={styles.title}>Germany</Title>
                                    <Caption style={styles.caption}>@duetschland</Caption>
                                </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>1M</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </View>
                    </View>
                    
                    <Drawer.Section style={{marginTop:15}}>
                        <DrawerItem
                            icon={({color, size}) => (
                                <MaterialIcons
                                    name="home"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Home"
                            onPress={()=> {props.navigation.navigate('Home')}}
                        />

                        <DrawerItem
                            icon={({color, size}) => (
                                    <MaterialIcons
                                        name="settings"
                                        color={color}
                                        size={size}
                                    />
                                )}
                            label="Setting"
                            onPress={()=> {props.navigation.navigate('Setting')}}
                        />
                    </Drawer.Section>

                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={()=> {toggleTheme()}}>
                            <View style={styles.preference}>
                                {paperTheme.dark ? <Text>Dark Theme</Text> : <Text>Default Theme</Text>}
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color, size}) => (
                                    <MaterialIcons
                                        name="logout"
                                        color={color}
                                        size={size}
                                    />
                                )}
                    label="Sign Out"
                />
            </Drawer.Section>
        </View>               
    )
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });