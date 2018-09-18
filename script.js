/* This app doesn't follow a11y best practices, and the JS file is incomplete. Complete the getDataFromApi, displaySearchData, and watchSubmit functions. When you're done, this app should allow a user to search for an artist and song title (both should be required), and display the song lyrics. You should make requests to this API: https://lyricsovh.docs.apiary.io/# . Also make any necessary adjustments to make this app accessible. */

const url = "https://api.lyrics.ovh/v1";


function getDataFromApi(artist, title, callback) {
  //your code here
  $.getJSON(`${url}/${artist}/${title}`, displaySearchData)
  
}

function displaySearchData(data) {
  //your code here
  //console.log(data.lyrics)
  let myResults = data.lyrics //put the data in a variable
  myResults = myResults.replace(/(?:\r\n|\r|\n)/g, '<br>'); // replace the \r\n with br tags
  $('.js-search-results').html(myResults)
}

function watchSubmit() {
  //your code here
  $('.js-search-form').submit(function(event){
    event.preventDefault();
    let artistSubmission = $('.js-query-artist').val();
    $('.js-query-artist').val('');
    let titleSubmission = $('.js-query-title').val();
    $('.js-query-title').val('');
    getDataFromApi(artistSubmission, titleSubmission, displaySearchData)
  })

}

$(watchSubmit);