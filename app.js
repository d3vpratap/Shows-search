const BaseURL = 'https://api.tvmaze.com/search/shows?q=';
const form = document.querySelector('form');
const DisplayRes = document.querySelector('#DisplayRes');


const removeImage = (parent)=>{
    while(parent.firstChild){
        parent.firstChild.remove();
    }
}
const getMovies = (SearchText)=>{
    fetch(`${BaseURL}${SearchText}`)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data);
        for(let movie of data){
            console.log(movie);
            if(movie.show.image!=null){
                const image = document.createElement('img');
                image.setAttribute('src',movie.show.image.medium);
                DisplayRes.append(image)
            }
        }
    })
    .catch((err)=>{
        console.log(err);
        console.log('Something is Wrong!');
    })
}

form.addEventListener('submit',(e)=>{
    e.preventDefault(); //blocked refreshing property.
    const SearchText = form.children[0].value;
    removeImage(DisplayRes);
    getMovies(SearchText);
    form.children[0].value="";
})

