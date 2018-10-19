import { log, logger } from "./logger1"

const Foo = {}
Foo.log = log
Foo.logger = logger

export default Foo
