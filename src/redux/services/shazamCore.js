import { createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const shazamCoreApi = createApi({
    reducerPath:'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl :'https://shazam-core.p.rapidapi.com',
        prepareHeaders:(headers) =>{
            headers.set('X-RapidAPI-Key','408257bdf6msha4ef511fc60e000p174d4bjsn535224dbace1')
        
            return headers;
        }
    }),
    endpoints:(builder)=>({
        getTopCharts : builder.query({query: ()=>'/v1/charts/world'}),
        getSongsByGenre:builder.query({query:(genre)=>`/v1/charts/genre-world?genre_code=${genre}`}),
        getSongDetails:builder.query({query:({songid})=>`/v1/tracks/details?track_id=${songid}`}),
        getSongRelated:builder.query({query:({songid})=>`/v1/tracks/related?track_id=${songid}`}),
        getSongsBySearch:builder.query({query:(searchTerm)=>`/v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`}),
        getSongsByCountry :builder.query({query:(countryCode)=>`/v1/charts/country?country_code=${countryCode}`}),
    })
})

export const {
    useGetSongsBySearchQuery,
    useGetTopChartsQuery,
    useGetSongsByGenreQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
    useGetSongsByCountryQuery
} = shazamCoreApi;