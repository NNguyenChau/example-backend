import ResponseHandler from '../helpers/responseHandler.js'
import { Vendor } from '../middlewares/vendor.js'

export default {
  getAll: async (req, res) => {
    try {
      const data = await Vendor.getAll()

      return ResponseHandler.success(res, data)
    } catch (error) {
      return ResponseHandler.error(res, error)
    }
  },

  create: async (req, res) => {
    try {
      const data = await Vendor.create(req.body)

      return ResponseHandler.success(res, data)
    } catch (error) {
      ResponseHandler.error(res, error)
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params
      const data = await Vendor.update(id, req.body)

      return ResponseHandler.success(res, data)
    } catch (error) {
      ResponseHandler.error(res, error)
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params

      await Vendor.delete(id)

      return ResponseHandler.success(res)
    } catch (error) {
      return ResponseHandler.error(res, error)
    }
  },
}