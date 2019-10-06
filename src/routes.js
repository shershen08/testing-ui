import Questions from './Questions.svelte'
import Intro from './Intro.svelte'
import NotFound from './routes/NotFound.svelte'

export const routes = {
    // Exact path
    '/': Intro,
    // Wildcard parameter
    '/test/*': Questions,

    // Catch-all
    // This is optional, but if present it must be the last
    '*': NotFound,
}