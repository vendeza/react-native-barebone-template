import { options } from "../../app.json";

const log = (...args) => {
    if (options && options.developer && options.developer.tracing) {
        console.log(args.join());
    } else {
        // do nothing
    }
};

export { log };
