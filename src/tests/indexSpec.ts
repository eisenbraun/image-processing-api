import supertest from 'supertest'
import app from '../index'

const request = supertest(app)

describe('Test endpoint responses', () => {
  it('response from the /api endpoint should be 404', async () => {
      const response = await request.get('/api')
      expect(response.status).toBe(404)
      
  })

  it('response from the /api/images endpoint should be 400', async () => {
      const response = await request.get('/api/images')
      expect(response.status).toBe(400)
      
  })

  it('response from /api/images?filename=fjord endpoint should be 200', async () => {
      const response = await request.get('/api/images?filename=fjord')
      expect(response.status).toBe(200)
      
  })

  it('response from /api/images?filename=fjord&width=300 endpoint should be 200', async () => {
      const response = await request.get('/api/images?filename=fjord&width=300')
      expect(response.status).toBe(200)
      
  })

  it('response from /api/images?filename=fjord&height=200 endpoint should be 200', async () => {
      const response = await request.get('/api/images?filename=fjord&height=200')
      expect(response.status).toBe(200)
      
  })

  it('response from /api/images?filename=fjord&width=300&height=200 endpoint should be 200', async () => {
    const response = await request.get('/api/images?filename=fjord&width=300&height=200')
    expect(response.status).toBe(200)
    
})

});
