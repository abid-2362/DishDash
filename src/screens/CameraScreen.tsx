import * as React from 'react';
import { useContext, useEffect, useRef, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';
import { Screen } from '../components/common/styles/CommonStyles.ts';
import styled from 'styled-components/native';
import RequestCustomCameraPermission from '../components/CameraScreen/RequestCustomCameraPermission.tsx';
import NoCameraDeviceError from '../components/CameraScreen/NoCameraDeviceError.tsx';
import { Appbar } from 'react-native-paper';
import { SettingsParamsList } from '../types';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../context/AuthContext.ts';
import useRequestGalleryPermission from '../hooks/useRequestGalleryPermission.ts';

const TheCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;
type CameraScreenProps = {};
const CameraScreen = ({}: CameraScreenProps) => {
  const {
    state: { user },
  } = useContext(AuthContext);
  const requestAndroidGalleryPermission = useRequestGalleryPermission();
  const [permissionGranted, setPermissionGranted] = useState(false);
  const { hasPermission, requestPermission } = useCameraPermission();
  const device = useCameraDevice('back');
  const navigation: NavigationProp<SettingsParamsList> = useNavigation();
  const camera = useRef<Camera>(null);

  const takePhoto = async () => {
    if (camera.current) {
      try {
        const photo = await camera.current.takePhoto();
        const fPath = `file://${photo.path}`;
        await CameraRoll.saveAsset(`file://${fPath}`, {
          type: 'photo',
        });
        if (user) {
          await AsyncStorage.setItem(`${user.uid}-photo`, fPath);
        }
        navigation.goBack();
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    (async () => {
      if (hasPermission) {
        setPermissionGranted(true);
      } else if (!hasPermission) {
        const cameraPermission = await requestPermission();
        const galleryPermission = await requestAndroidGalleryPermission();
        const permission = cameraPermission && galleryPermission;
        setPermissionGranted(permission);
      }
    })();
  }, [hasPermission]);

  if (!permissionGranted) {
    return <RequestCustomCameraPermission />;
  }

  if (device == null) {
    return <NoCameraDeviceError />;
  }

  return (
    <>
      <Appbar>
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content titleStyle={{ textAlign: 'center' }} title={'Profile photo'} />
      </Appbar>
      <Screen>
        <TouchableOpacity onPress={takePhoto}>
          <TheCamera device={device} isActive={true} ref={camera} photo={true} />
        </TouchableOpacity>
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CameraScreen;
