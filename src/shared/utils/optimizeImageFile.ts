export default async function optimizeImageFile(file: File): Promise<File> {
  const MAX_SIZE_IMG_W = 640;
  const MAX_SIZE_IMG_H = 640;
  const imageObj = new Image();
  const resultCanvas = document.createElement('canvas');

  imageObj.src = URL.createObjectURL(file);

  return new Promise(resolve => {
    imageObj.onload = (event: Event) => {
      const { width, height } = event.path[0];
      console.log(event);
      const ratio = width / height;
      const maxRatio = MAX_SIZE_IMG_W / MAX_SIZE_IMG_H;

      if (width <= MAX_SIZE_IMG_W && height <= MAX_SIZE_IMG_H) {
        resultCanvas.width = width;
        resultCanvas.height = height;
      } else if (ratio >= maxRatio) {
        // base on MAX_SIZE_IMG_W
        resultCanvas.width = MAX_SIZE_IMG_W;
        resultCanvas.height = resultCanvas.width / ratio;
      } else {
        // base on MAX_SIZE_IMG_H
        resultCanvas.height = MAX_SIZE_IMG_H;
        resultCanvas.width = resultCanvas.height * ratio;
      }
      resultCanvas
        .getContext('2d')
        .drawImage(
          event.path[0],
          0,
          0,
          resultCanvas.width,
          resultCanvas.height,
        );

      resultCanvas.toBlob((blob: Blob & any) => {
        blob.lastModifiedDate = new Date();
        blob.name = file.name;

        resolve(<File>blob);
      }, 'image/jpeg');
    };
  });
}
