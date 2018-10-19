import { log, logger } from "./logger2"

const Foo = {}
Foo.log = log
Foo.logger = logger

export default Foo
