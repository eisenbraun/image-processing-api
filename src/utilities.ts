import sharp from 'sharp'

const fullImagePath = (filename: string) : string => `${process.cwd()}/assets/full/${filename}.jpg`

const thumbImagePath = (filename: string, width: string | number | null = null, height: string | number | null = null) : string => {
  if (width && height) {
    return `${process.cwd()}/assets/thumb/${filename}-${width}w-${height}h.jpg`
  } else if (width) {
    return `${process.cwd()}/assets/thumb/${filename}-${width}w.jpg`
  } else if (height) {
    return `${process.cwd()}/assets/thumb/${filename}-${height}h.jpg`
  }

  return `${process.cwd()}/assets/thumb/${filename}.jpg`
}

const resizeImage = async (filename: string, width: string | number | null = null, height: string | number | null = null) : Promise<sharp.OutputInfo> => {
  if (width && height) {
    return sharp(fullImagePath(filename))
      .resize(parseInt(width as string), parseInt(height as string))
      .toFile(thumbImagePath(filename, width, height))
  } else if (width) {
    return sharp(fullImagePath(filename))
      .resize(parseInt(width as string), undefined)
      .toFile(thumbImagePath(filename, width))
  } else if (height) {
    return sharp(fullImagePath(filename))
      .resize(undefined, parseInt(height as string))
      .toFile(thumbImagePath(filename, null, height))
  } else {
    return sharp(fullImagePath(filename))
      .toFile(thumbImagePath(filename))
  }
}

export default {
  fullImagePath,
  thumbImagePath,
  resizeImage
}