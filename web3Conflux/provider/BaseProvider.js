const EventEmitter = require('events')
import Constant from '../constant'

class BaseProvider extends EventEmitter {
  constructor(options) {
    super()
    this.address = options.address
    this.chainCode = options.chainCode
    this.requestUrl = Constant.CHAIN_URL[options.chainCode]
  }
}

module.exports = BaseProvider