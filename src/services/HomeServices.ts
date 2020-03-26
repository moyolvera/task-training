import Geolocation, { GeoPosition } from 'react-native-geolocation-service';
import { Platform, PermissionsAndroid } from 'react-native';

export default class HomeServices {
  public getGeoPosition = async () => {
    const hasPermissions = await this.checkPermissions();

    if (!hasPermissions) {
      return undefined;
    }

    return this.getCurrentGeoPosition();
  };

  private checkPermissions = async () => {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization();
      return true;
    }

    try {
      const granted = await this.requestAndroidAuthorization();
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  };

  private requestAndroidAuthorization = async () => {
    return PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
      title: 'donde andas?',
      message: 'dame chance de obtener tu localizacion',
      buttonPositive: 'si',
      buttonNegative: 'no',
    });
  };

  private getCurrentGeoPosition = async () => {
    return new Promise<GeoPosition>((resolve, reject) => {
      Geolocation.getCurrentPosition(
        (position) => {
          resolve(position);
        },
        (error) => {
          reject(error);
        },
        { enableHighAccuracy: true, timeout: 10 * 1000, maximumAge: 10000 },
      );
    });
  };
}
