import funcss from "funcss"
import defs from "./defs"
import addMixins from "./mixins"

const stylesheet = addMixins(funcss(defs))

export default stylesheet
