import { View, Text, ScrollView, Image, Modal, TouchableOpacity, StyleSheet } from 'react-native'

import React, { useState } from 'react'
import { styles } from '../../constants/GlobalStyle'
import Images from '../../constants/Images'
import { customStyles } from './FrontendStyle'
import { Colors } from '../../constants/Colors'
export default function Profile() {
  const {post,profileDpSec,posti,postii,} = Images
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalImg, setModalImg] = useState();

  const toggleModal = (post: any) => {
    setModalImg(post)
    setModalVisible(!isModalVisible);
  };
  return (
    <>

      <View style={[styles.flexContainer]}>
        <View style={[styles.horizantalyCenter]} >
          <View style={[customStyles.border]}>
            <TouchableOpacity onPress={()=>toggleModal(profileDpSec)}>
              <Image source={profileDpSec} style={customStyles.profileImg} />
            </TouchableOpacity>
          </View>
          <View style={[styles.horizantalyCenter, customStyles.bio]}>
            <Text style={customStyles.textBold}>Jacob West</Text>
            <Text style={[customStyles.textCenter, customStyles.textBio]} >Digital goodies designer <Text style={{ color: Colors.primary }} >@pixsellz</Text> Everything is designed.</Text>
          </View>
          <View>
            <Image source={Images.tabs} />
          </View>
        </View>
          <ScrollView>

            <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-start", width: "100%" }}>
            <TouchableOpacity onPress={()=>toggleModal(post)}>
            <Image source={post} style={{ width: 120, height: 124 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>toggleModal(posti)}>
            <Image source={posti} style={{ width: 120, height: 124 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>toggleModal(post)}>
            <Image source={post} style={{ width: 120, height: 124 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>toggleModal(posti)}>
            <Image source={posti} style={{ width: 120, height: 124 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>toggleModal(post)}>
            <Image source={post} style={{ width: 120, height: 124 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>toggleModal(postii)}>
            <Image source={postii} style={{ width: 120, height: 124 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>toggleModal(posti)}>
            <Image source={posti} style={{ width: 120, height: 124 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>toggleModal(postii)}>
            <Image source={postii} style={{ width: 120, height: 124 }} />
            </TouchableOpacity>
             
            </View>
          </ScrollView>
        <View style={customStyles.container}>
          <Modal
            animationType="fade"
            transparent={false}
            visible={isModalVisible}
            onRequestClose={toggleModal}
          >
            <View style={customStyles.modalContainer}>
              <TouchableOpacity onPress={toggleModal} style={customStyles.closeButton}>
                <Text style={customStyles.closeButtonText}>Close</Text>
              </TouchableOpacity>
              <Image source={modalImg} style={customStyles.fullScreenProfileImg} />
            </View>
          </Modal>

        </View>

      </View>

    </>
  )
}

