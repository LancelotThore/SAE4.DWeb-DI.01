import {fakeNetwork} from './utils.js';

// export async function fetchOurTeams(teamName){
//     await fakeNetwork();
//     let answer = await fetch('/src/lib/data/teams-data.json');
//     let data = await answer.json();
//     return data[teamName];
// }

export async function fetchMovies() {
    let answer = await fetch("http://localhost:8080/api/movie/");
    let data = await answer.json();
    return data;
}

export async function fetchMovie({id}) {
    let answer = await fetch(`http://localhost:8080/api/movie/${id}`);
    let data = await answer.json();
    return data;
}

export async function fetchCategories() {
    let answer = await fetch("http://localhost:8080/api/category/");
    let data = await answer.json();
    return data;
}

export async function fetchCategoriesName() {
    let answer = await fetch("http://localhost:8080/api/category/name/");
    let data = await answer.json();
    return data;
}

export async function fetchCategory({id}) {
    let answer = await fetch(`http://localhost:8080/api/category/${id}`);
    let data = await answer.json();
    return data;
}

export async function fetchSearch({query}) {
    let answer = await fetch(`http://localhost:8080/api/search/${query}`);
    let data = await answer.json();
    return data;
}