export {default} from "next-auth/middleware"

// this makes sure that if you click "Login" instead of "Account Create" it'll log you in as well
export const config = { matcher: ["/login"]}