export function Search(){
  const search = document.querySelector('#search')
  const list = document.querySelector('#movies-list')
  let card = '<div class="card"></div>'
  search.addEventListener("input",async (e) => {
  let value = e.target.value
  if(value.length > 2 ) {
    fetch('http://www.omdbapi.com/?apikey=cc78570d&s='+value+'')
    .then((response) => response.json())
    .then((data) => {

      const test = JSON.stringify(data)
      const res = JSON.parse(test)
      const movies = res.Search
      list.innerHTML = ""
      movies.filter(e => {
        const title = e.Title
        const poster = e.Poster
        const year = e.Year
        const div = "<div class='card'><h2>"+title+"</h2><img src='"+poster+"'><p>"+year+"</p></div>"
        list.innerHTML += div
      })      
      

    }).catch((error) => {
      console.log(error)
    });
  }
  else if (value.length == 0) {
    list.innerHTML = ""
    console.clear()
  }
}) 
}