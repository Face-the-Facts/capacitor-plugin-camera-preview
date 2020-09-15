import { WebPlugin } from '@capacitor/core';
import { 
  CameraPreviewPlugin,
  CameraPreviewStartCameraOptions,
  CameraPreviewSuccessHandler,
  CameraPreviewErrorHandler,
  CameraPreviewTakePictureOptions,
  CameraPreviewTakeSnapshotOptions,
  CameraPreviewColorEffect,
  CameraPreviewPreviewSizeDimension,
  CameraPreviewFlashMode,
  CameraPreviewExposureMode,
  CameraPreviewWhiteBalanceMode

} from './definitions';

export class CameraPreviewWeb extends WebPlugin implements CameraPreviewPlugin {
  constructor() {
    super({
      name: 'CameraPreview',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  startCamera(options?: CameraPreviewStartCameraOptions, onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {

  }
  stopCamera(onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {

  }
  switchCamera(onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {

  }
  hide(onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {

  }
  show(onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {

  }
  takePicture(options?: CameraPreviewTakePictureOptions|CameraPreviewSuccessHandler, onSuccess?: CameraPreviewSuccessHandler|CameraPreviewErrorHandler, onError?: CameraPreviewErrorHandler): void {

  }
  takeSnapshot(options?: CameraPreviewTakeSnapshotOptions|CameraPreviewSuccessHandler, onSuccess?: CameraPreviewSuccessHandler|CameraPreviewErrorHandler, onError?: CameraPreviewErrorHandler): void {

  }
  setColorEffect(effect: CameraPreviewColorEffect|string, onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {

  }
  setZoom(zoom?: number, onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {
    
  }
  startRecordVideo(options?:any|CameraPreviewSuccessHandler, onSuccess?:CameraPreviewSuccessHandler|CameraPreviewErrorHandler, onError?:CameraPreviewErrorHandler):void {

  }
  stopRecordVideo(onSuccess?:CameraPreviewSuccessHandler|CameraPreviewErrorHandler, onError?:CameraPreviewErrorHandler):void {

  }
  getMaxZoom(onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {

  }
  getSupportedFocusMode(onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {

  }
  getZoom(onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {

  }
  getHorizontalFOV(onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {

  }
  setPreviewSize(dimensions?: CameraPreviewPreviewSizeDimension|string, onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {

  }
  getSupportedPictureSizes(onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {

  }
  getSupportedFlashModes(onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {

  }
  getSupportedColorEffects(onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {

  }
  setFlashMode(flashMode: CameraPreviewFlashMode|string, onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {

  }
  getSupportedFocusModes(onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {

  }
  getFocusMode(onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {

  }
  setFocusMode(focusMode?: CameraPreviewFocusMode|string, onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {

  }
  tapToFocus(xPoint?: number, yPoint?: number, onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {

  }
  getExposureModes(onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {

  }
  getExposureMode(onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {

  }
  setExposureMode(exposureMode?: CameraPreviewExposureMode, onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {

  }
  getExposureCompensation(onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {

  }
  setExposureCompensation(exposureCompensation?: number, onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {

  }
  getExposureCompensationRange(onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {

  }
  getSupportedWhiteBalanceModes(onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {

  }
  getSupportedWhiteBalanceMode(onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {

  }
  setWhiteBalanceMode(whiteBalanceMode?: CameraPreviewWhiteBalanceMode|string, onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {

  }
  onBackButton(onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {

  }
  getBlob(path: string, onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {

  }
  getCameraCharacteristics(onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {

  }

}

const CameraPreview = new CameraPreviewWeb();

export { CameraPreview };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(CameraPreview);
