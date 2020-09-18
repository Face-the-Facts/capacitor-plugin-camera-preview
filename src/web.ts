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
  CameraPreviewWhiteBalanceMode,
  CameraPreviewFocusMode

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

  async startCamera(options: CameraPreviewStartCameraOptions, onSuccess: CameraPreviewSuccessHandler, onError: CameraPreviewErrorHandler): Promise<{ value: string }> {
    //p = new Promise<string>((resolve, reject)=> {})
    if (!options) {
      options = {};
    }
    options.x = options.x || 0;
    options.y = options.y || 0;
  
    options.width = options.width || window.screen.width;
    options.height = options.height || window.screen.height;
  
    options.camera = options.camera || 'front';

    if (typeof(options.tapPhoto) === 'undefined') {
      options.tapPhoto = true;
    }
  
    if (typeof (options.tapFocus) == 'undefined') {
      options.tapFocus = false;
    }

    options.previewDrag = options.previewDrag || false;

    options.toBack = options.toBack || false;
  
    if (typeof(options.alpha) === 'undefined') {
      options.alpha = 1;
    }
  
    options.disableExifHeaderStripping = options.disableExifHeaderStripping || false;
  
    options.storeToFile = options.storeToFile || false;

    //const video = document.createElement('video')
    
    document

    const video: HTMLVideoElement = document.createElement('video');
    if (video !== null){
      video.style.width = String(options.width)
      video.style.height = String(options.height)
    
    

    await navigator.mediaDevices.getUserMedia({video: true, audio: false}).then((stream: MediaStream) => {
      const cameraPreview = document.getElementById('camera-preview');
      cameraPreview?.appendChild(video)
        video.srcObject = stream
        video.onloadedmetadata = function(e) {
          console.log(e)
          video.play();
        };
        console.log(video)
        //content.appendChild(video)
      }).catch((err: {}) => {
        console.log(err)
      })
    }
      
    
    console.log(options);

    return new Promise((resolve, reject) => {
      if (typeof(video.srcObject) !== 'undefined') {
        resolve({value: 'success'});
      } else {
        reject('error');
      }
    }); 
  }
  stopCamera(onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {
    console.log(onSuccess);
    console.log(onError);
  }
  switchCamera(onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {
    console.log(onSuccess);
    console.log(onError);
  }
  hide(onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {
    console.log(onSuccess);
    console.log(onError);
  }
  show(onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {
    console.log(onSuccess);
    console.log(onError);
  }
  takePicture(options?: CameraPreviewTakePictureOptions|CameraPreviewSuccessHandler, onSuccess?: CameraPreviewSuccessHandler|CameraPreviewErrorHandler, onError?: CameraPreviewErrorHandler): void {
    console.log(options);
    console.log(onSuccess);
    console.log(onError);
  }
  takeSnapshot(options?: CameraPreviewTakeSnapshotOptions|CameraPreviewSuccessHandler, onSuccess?: CameraPreviewSuccessHandler|CameraPreviewErrorHandler, onError?: CameraPreviewErrorHandler): void {
    console.log(options);
    console.log(onSuccess);
    console.log(onError);
  }
  setColorEffect(effect: CameraPreviewColorEffect|string, onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {
    console.log(effect);
    console.log(onSuccess);
    console.log(onError);
  }
  setZoom(zoom?: number, onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {
    console.log(zoom);
    console.log(onSuccess);
    console.log(onError);
  }
  startRecordVideo(options?:any|CameraPreviewSuccessHandler, onSuccess?:CameraPreviewSuccessHandler|CameraPreviewErrorHandler, onError?:CameraPreviewErrorHandler):void {
    console.log(options);
    console.log(onSuccess);
    console.log(onError);
  }
  stopRecordVideo(onSuccess?:CameraPreviewSuccessHandler|CameraPreviewErrorHandler, onError?:CameraPreviewErrorHandler):void {
    console.log(onSuccess);
    console.log(onError);
  }
  getMaxZoom(onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {
    console.log(onSuccess);
    console.log(onError);
  }
  getSupportedFocusMode(onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {
    console.log(onSuccess);
    console.log(onError);
  }
  getZoom(onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {
    console.log(onSuccess);
    console.log(onError);
  }
  getHorizontalFOV(onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {
    console.log(onSuccess);
    console.log(onError);
  }
  setPreviewSize(dimensions?: CameraPreviewPreviewSizeDimension|string, onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {
    console.log(dimensions);
    console.log(onSuccess);
    console.log(onError);
  }
  getSupportedPictureSizes(onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {
    console.log(onSuccess);
    console.log(onError);
  }
  getSupportedFlashModes(onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {
    console.log(onSuccess);
    console.log(onError);
  }
  getSupportedColorEffects(onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {
    console.log(onSuccess);
    console.log(onError);
  }
  setFlashMode(flashMode: CameraPreviewFlashMode|string, onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {
    console.log(flashMode);
    console.log(onSuccess);
    console.log(onError);
  }
  getSupportedFocusModes(onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {
    console.log(onSuccess);
    console.log(onError);
  }
  getFocusMode(onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {
    console.log(onSuccess);
    console.log(onError);
  }
  setFocusMode(focusMode?: CameraPreviewFocusMode|string, onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {
    console.log(focusMode);
    console.log(onSuccess);
    console.log(onError);
  }
  tapToFocus(xPoint?: number, yPoint?: number, onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {
    console.log(xPoint, yPoint);
    console.log(onSuccess);
    console.log(onError);
  }
  getExposureModes(onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {
    console.log(onSuccess);
    console.log(onError);
  }
  getExposureMode(onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {
    console.log(onSuccess);
    console.log(onError);
  }
  setExposureMode(exposureMode?: CameraPreviewExposureMode, onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {
    console.log(exposureMode);
    console.log(onSuccess);
    console.log(onError);
  }
  getExposureCompensation(onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {
    console.log(onSuccess);
    console.log(onError);
  }
  setExposureCompensation(exposureCompensation?: number, onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {
    console.log(exposureCompensation);
    console.log(onSuccess);
    console.log(onError);
  }
  getExposureCompensationRange(onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {
    console.log(onSuccess);
    console.log(onError);
  }
  getSupportedWhiteBalanceModes(onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {
    console.log(onSuccess);
    console.log(onError);
  }
  getSupportedWhiteBalanceMode(onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {
    console.log(onSuccess);
    console.log(onError);
  }
  setWhiteBalanceMode(whiteBalanceMode?: CameraPreviewWhiteBalanceMode|string, onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {
    console.log(whiteBalanceMode);
    console.log(onSuccess);
    console.log(onError);
  }
  onBackButton(onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {
    console.log(onSuccess);
    console.log(onError);
  }
  getBlob(path: string, onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {
    console.log(path);
    console.log(onSuccess);
    console.log(onError);
  }
  getCameraCharacteristics(onSuccess?: CameraPreviewSuccessHandler, onError?: CameraPreviewErrorHandler): void {
    console.log(onSuccess);
    console.log(onError);
  }

}

const CameraPreview = new CameraPreviewWeb();

export { CameraPreview };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(CameraPreview);
