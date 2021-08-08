import fs from 'fs'
import utilities from "../utilities";



describe('testing fullImagePath', () => {
  const goodFile = 'fjord'
  const badFile = 'no-file'

  it('fullImagePath should return the correct path string', () => {
    expect(utilities.fullImagePath(goodFile)).toBe(`${process.cwd()}/assets/full/${goodFile}.jpg`)
  })

  it('fullImagePath should return a path to a valid file', () => {
    fs.access(utilities.fullImagePath(goodFile), fs.constants.F_OK, (err) => {
      expect(err).toBeFalsy()
    })
  })

  it('fullImagePath should return a path to a invalid file', () => {
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

  it('thumbImagePath should take numbers and return a path with a width and height', () => {
    expect(utilities.thumbImagePath(filename, widthNumber, heightNumber)).toBe(`${process.cwd()}/assets/thumb/${filename}-${widthNumber}w-${heightNumber}h.jpg`)
  })

  it('thumbImagePath should take strings and return a path with a width and height', () => {
    expect(utilities.thumbImagePath(filename, widthString, heightString)).toBe(`${process.cwd()}/assets/thumb/${filename}-${widthString}w-${heightString}h.jpg`)
  })

  it('thumbImagePath should take numbers and return a path with a width', () => {
    expect(utilities.thumbImagePath(filename, widthNumber)).toBe(`${process.cwd()}/assets/thumb/${filename}-${widthNumber}w.jpg`)
  })

  it('thumbImagePath should take strings and return a path with a width and height', () => {
    expect(utilities.thumbImagePath(filename, widthString)).toBe(`${process.cwd()}/assets/thumb/${filename}-${widthString}w.jpg`)
  })

  it('thumbImagePath should take numbers and return a path with a height', () => {
    expect(utilities.thumbImagePath(filename, null, heightNumber)).toBe(`${process.cwd()}/assets/thumb/${filename}-${heightNumber}h.jpg`)
  })

  it('thumbImagePath should take strings and return a path with a height', () => {
    expect(utilities.thumbImagePath(filename, null, heightString)).toBe(`${process.cwd()}/assets/thumb/${filename}-${heightString}h.jpg`)
  })

  it('thumbImagePath should return a path with no width or height', () => {
    expect(utilities.thumbImagePath(filename)).toBe(`${process.cwd()}/assets/thumb/${filename}.jpg`)
  })
})