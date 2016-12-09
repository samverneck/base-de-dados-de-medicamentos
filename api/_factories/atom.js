const CONFIG_PATH = './../_config/'

const REQUIRED = require(CONFIG_PATH + 'fields-required')
const OPTIONAL = require(CONFIG_PATH + 'fields-optional')
const FIELDS_REMOVE = require(CONFIG_PATH + 'fields-remove')

const filterAtoms = (key) => require(CONFIG_PATH + 'fields-optional').includes
const mapForObject = (option, i) => Object.assign({}, {[option]: CONFIG[option]})
const reduceToAtom = (acc, cur) => Object.assign(acc, {
        [Object.keys(cur)[0]]: cur[Object.keys(cur)[0]]
      }

const createRequired = (CONFIG) => 
  CONFIG.VALIDATE_FACTORY_PATH
    ? ({type: CONFIG.type,
        validate: require(CONFIG.VALIDATE_FACTORY_PATH)(CONFIG.ATOM_NAME.toUpperCase()) 
      })
    : ({type: CONFIG.type})

const createOptional = (CONFIG) => 
  Object.keys(CONFIG)
    .filter( filterAtoms )
    .map( mapForObject )
    .reduce( reduceToAtom ), {})

module.exports = (CONFIG) => Object.assign({}, createRequired(CONFIG), createOptional(CONFIG))

