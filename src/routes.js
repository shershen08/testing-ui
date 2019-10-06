import Questions from './routes/Questions/index.svelte'
import Results from './routes/Results/index.svelte'
import Intro from './routes/Intro/index.svelte'
import NotFound from './routes/NotFound.svelte'

export const routes = {
    // Exact path
    '/': Intro,
    // Wildcard parameter
    '/test/*': Questions,
    '/results': Results,
    
    // Catch-all
    // This is optional, but if present it must be the last
    '*': NotFound,
}