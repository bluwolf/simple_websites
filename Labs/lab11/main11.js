var json = {
	"firstName":"Tommy",
	"lastName":"Trojan",
	"age":21,
	"phone":{
		"cell":"123-123-1234",
		"home":"789-789-7890"
	},
	"friends":[
		{
			"firstName":"John", 
			"lastName":"Smith"
		},
		{
			"firstName":"Jane", 
			"lastName":"Doe"
		}
	]
};

json.friends[0].firstName;


var jsonStr = '{"firstName":"Tommy","lastName":"Trojan","age":21,"phone":{"cell":"123-123-1234","home":"789-789-7890"},"friends":[{"firstName":"John", "lastName":"Smith"},{"firstName":"Jane", "lastName":"Doe"}]}';

var jsonObj = JSON.parse( jsonStr );
jsonObj.friends[0].firstName;


/**********
 * JSONP
 **********/

 function myCallback (jsonObj){

	 $('#results-table tbody').html('');
     var newHTML='';
	 for (i=0; i<jsonObj.results.length; i++){
	 
	 newHTML+= '<tr>'+'<td><img src="'+jsonObj.results[i].artworkUrl100  +'"></td>';
	 newHTML+= '<td> '+jsonObj.results[i].artistName  +'</td> '; 
	 newHTML+= '<td> '+jsonObj.results[i].trackName  +'</td> ';
	 newHTML+= '<td> '+jsonObj.results[i].collectionName  +'</td> ';
	 newHTML += '<td>' +jsonObj.results[i].trackPrice+ '</td>';    
     newHTML += '<td>' +jsonObj.results[i].collectionPrice+ '</td>';
     newHTML += '<td><audio src="' + jsonObj.results[i].previewUrl + '"controls></audio></td>' +'</tr>';
         
     }
     
     $('#results-table tbody' ).html(newHTML);
 }


 $(function(){
	 $('#search-btn').click(function(){
         
		 var searchTerm=$('#search-term').val();
		 var limitNumber=$('#limit').val();
		 var src ='http://itunes.apple.com/search?term='+searchTerm+ '&limit='+limitNumber+'&callback=myCallback';
         var script=document.createElement('script');
         script.src=src;
         $('head').append(script); 
		 
	 });
	 
	 
 });