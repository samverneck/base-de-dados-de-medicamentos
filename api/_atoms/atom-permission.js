const ATOM_NAME = require('./../_config/atoms/getAtomName')(__filename)
const ATOM_CONFIG = require('./../_config/atoms/getConfigPath')(ATOM_NAME)
const CONFIG = require(ATOM_CONFIG)

const Atom = require('./../_factories/atom')(CONFIG)
module.exports = Atom
