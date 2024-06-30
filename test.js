import { generateErrorCode } from "./tools/generate-error-code.js"

const main = ()=> {
    const html = generateErrorCode()
    console.log(html)
}

main()