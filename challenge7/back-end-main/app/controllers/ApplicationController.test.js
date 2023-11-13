const { describe, beforeEach, it, expect } = require('@jest/globals')
const ApplicationController = require('./ApplicationController')
// const { NotFoundError } = require('../errors/NotFoundError')

describe('ApplicationController', () => {
  let controller

  beforeEach(() => {
    controller = new ApplicationController()
  })

  describe('handleGetRoot', () => {
    it('should respond with status 200 and a JSON message', () => {
      const mockResponse = {
        status: jest.fn(() => mockResponse),
        json: jest.fn()
      }
      controller.handleGetRoot({}, mockResponse)
      expect(mockResponse.status).toHaveBeenCalledWith(200)
      expect(mockResponse.json).toHaveBeenCalledWith({
        status: 'OK',
        message: 'BCR API is up and running!'
      })
    })
  })

  describe('handleNotFound', () => {
    it('should respond with status 404 and a JSON error message', () => {
      const mockRequest = { method: 'GET', url: '/nonexistent' }
      const mockResponse = {
        status: jest.fn(() => mockResponse),
        json: jest.fn()
      }

      controller.handleNotFound(mockRequest, mockResponse)

      expect(mockResponse.status).toHaveBeenCalledWith(404)
      expect(mockResponse.json).toHaveBeenCalledWith({
        error: {
          name: 'Error',
          message: 'Not found!',
          details: { method: 'GET', url: '/nonexistent' }
        }
      })
    })
  })

  describe('handleError', () => {
    it('should respond with status 500 and a JSON error message', () => {
      const mockError = new Error('Test error')
      const mockRequest = {}
      const mockResponse = {
        status: jest.fn(() => mockResponse),
        json: jest.fn()
      }

      controller.handleError(mockError, mockRequest, mockResponse)

      expect(mockResponse.status).toHaveBeenCalledWith(500)
      expect(mockResponse.json).toHaveBeenCalledWith({
        error: {
          name: 'Error',
          message: 'Test error',
          details: null
        }
      })
    })

    it('should include error details if available', () => {
      const mockErrorWithDetails = new Error('Test error with details')
      mockErrorWithDetails.details = { customDetail: 'Some detail' }
      const mockRequest = {}
      const mockResponse = {
        status: jest.fn(() => mockResponse),
        json: jest.fn()
      }

      controller.handleError(mockErrorWithDetails, mockRequest, mockResponse)

      expect(mockResponse.status).toHaveBeenCalledWith(500)
      expect(mockResponse.json).toHaveBeenCalledWith({
        error: {
          name: 'Error',
          message: 'Test error with details',
          details: { customDetail: 'Some detail' }
        }
      })
    })
  })

  describe('getOffsetFromRequest', () => {
    it('should return the correct offset based on the request query parameters', () => {
      const mockRequest = { query: { page: 2, pageSize: 10 } }
      const offset = controller.getOffsetFromRequest(mockRequest)
      expect(offset).toBe(10)
    })
  })

  describe('buildPaginationObject', () => {
    it('should build a pagination object based on the request query parameters and count', () => {
      const mockRequest = { query: { page: 2, pageSize: 10 } }
      const count = 25
      const paginationObject = controller.buildPaginationObject(
        mockRequest,
        count
      )

      expect(paginationObject).toEqual({
        page: 2,
        pageCount: 3,
        pageSize: 10,
        count: 25
      })
    })
  })
})
