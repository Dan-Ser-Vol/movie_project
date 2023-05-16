const baseURL = ' https://api.themoviedb.org/3'

const movie = 'movie'
const discover = 'discover'
const genre = 'genre'
const search = 'search'
const page = 'page'
const primary_release_year = 'primary_release_year'
const year = 'year'

const urls = {
movieApi:{
     movie,
    discover,
    genre,
    search,
    page,
    year,
    primary_release_year,
    sort_by: {
         popularityAsc: 'popularity.asc',
         popularityDesc: 'popularity.desc',
    }
}
}




export {
    baseURL, urls
}