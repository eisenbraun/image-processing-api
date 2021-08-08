import fs from 'fs'
import {promises as fsPromises} from 'fs';
import utilities from "../utilities";



describe('testing fullImagePath', () => {
  const goodFile = 'fjord'
  const badFile = 'no-file'

  it('expects fullImagePath(goodFile) to be value', () => {
    expect(utilities.fullImagePath(goodFile)).toBe(`${process.cwd()}/assets/full/${goodFile}.jpg`)
  })

  it('expects fullImagePath(goodFile) to be a valid file', () => {
    fs.access(utilities.fullImagePath(goodFile), fs.constants.F_OK, (err) => {
      expect(err).toBeFalsy()
    })
  })

  it('expects fullImagePath(badFile) to not be a valid file', () => {
    fs.access(utilities.fullImagePath(badFile), fs.constants.F_OK, (err) => {
      expect(err).toBeTruthy()
    })
  })
})

describe('testing thumbImagePath', () => {
  const filename = 'fjord'
  const widthNumber = 300
  const widthString = '300'
  const heightNumber = 200
  const heightString = '200'

  it('expects thumbImagePath(filename, widthNumber, heightNumber) to be value', () => {
    expect(utilities.thumbImagePath(filename, widthNumber, heightNumber)).toBe(`${process.cwd()}/assets/thumb/${filename}-${widthNumber}w-${heightNumber}h.jpg`)
  })

  it('expects thumbImagePath(filename, widthString, heightString) to be value', () => {
    expect(utilities.thumbImagePath(filename, widthString, heightString)).toBe(`${process.cwd()}/assets/thumb/${filename}-${widthString}w-${heightString}h.jpg`)
  })

  it('expects thumbImagePath(filename, widthNumber) to be value', () => {
    expect(utilities.thumbImagePath(filename, widthNumber)).toBe(`${process.cwd()}/assets/thumb/${filename}-${widthNumber}w.jpg`)
  })

  it('expects thumbImagePath(filename, widthString) to be value', () => {
    expect(utilities.thumbImagePath(filename, widthString)).toBe(`${process.cwd()}/assets/thumb/${filename}-${widthString}w.jpg`)
  })

  it('expects thumbImagePath(filename, null, heightNumber) to be value', () => {
    expect(utilities.thumbImagePath(filename, null, heightNumber)).toBe(`${process.cwd()}/assets/thumb/${filename}-${heightNumber}h.jpg`)
  })

  it('expects thumbImagePath(filename, null, heightString) to be value', () => {
    expect(utilities.thumbImagePath(filename, null, heightString)).toBe(`${process.cwd()}/assets/thumb/${filename}-${heightString}h.jpg`)
  })

  it('expects thumbImagePath(filename) to be value', () => {
    expect(utilities.thumbImagePath(filename)).toBe(`${process.cwd()}/assets/thumb/${filename}.jpg`)
  })
})

describe('testing resizeImage', () => {
  const filename = 'fjord'
  const widthNumber = 300
  const widthString = '300'
  const heightNumber = 200
  const heightString = '200'

  it('expects resizeImage(filename, widthNumber, heightNumber) to create an image', () => {
    utilities.resizeImage(filename as string, widthNumber, heightNumber)
      .then((data) => {
        expect(data.width).toEqual(widthNumber)
        expect(data.height).toEqual(heightNumber)

        // remove thumbnail image
        fsPromises.rm(utilities.thumbImagePath(filename, widthNumber, heightNumber))
      }) 
  })

  it('expects resizeImage(filename, widthNumber) to create an image', () => {
    utilities.resizeImage(filename as string, widthNumber)
      .then((data) => {
        expect(data.width).toEqual(widthNumber)

        // remove thumbnail image
        fsPromises.rm(utilities.thumbImagePath(filename, widthNumber))
      }) 
  })


  it('expects resizeImage(filename, null, heightNumber) to create an image', () => {
    utilities.resizeImage(filename as string, null, heightNumber)
      .then((data) => {
        expect(data.height).toEqual(heightNumber)

        // remove thumbnail image
        fsPromises.rm(utilities.thumbImagePath(filename, null, heightNumber))
      }) 
  })

  it('expects resizeImage(filename, widthString, heightString) to create an image', () => {
    utilities.resizeImage(filename as string, widthString, heightString)
      .then((data) => {
        expect(data.width).toEqual(parseInt(widthString))
        expect(data.height).toEqual(parseInt(heightString))

        // remove thumbnail image
        fsPromises.rm(utilities.thumbImagePath(filename, widthString, heightString))
      }) 
  })

  it('expects resizeImage(filename, widthString) to create an image', () => {
    utilities.resizeImage(filename as string, widthString)
      .then((data) => {
        expect(data.width).toEqual(parseInt(widthString))

        // remove thumbnail image
        fsPromises.rm(utilities.thumbImagePath(filename, widthNumber))
      }) 
  })


  it('expects resizeImage(filename, null, heightString) to create an image', () => {
    utilities.resizeImage(filename as string, null, heightString)
      .then((data) => {
        expect(data.height).toEqual(parseInt(heightString))

        // remove thumbnail image
        fsPromises.rm(utilities.thumbImagePath(filename, null, heightString))
      }) 
  })
})