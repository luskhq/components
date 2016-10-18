import funcss from "funcss"
import defs from "./defs"
import globals from "./globals"
import addMixins from "./mixins"

const stylesheet = addMixins(funcss(defs, {globals}))

export default stylesheet
