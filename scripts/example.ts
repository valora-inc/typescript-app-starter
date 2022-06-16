// This is an example of a script using shelljs
// to replace bash/shell scripts
import * as $ from 'shelljs'

$.config.fatal = true

$.echo('Hello World!')
$.exec('ls -l')
