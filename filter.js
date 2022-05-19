window.addEventListener("load", function (evt) {

   
    document.querySelector('#form').addEventListener('submit', function(evt) {
        evt.preventDefault();

        var result = document.querySelector('#laptop');
        var loading = document.querySelector('.loader-wrapper');
        var recomendation = document.querySelector('#recomendation');
        var result_filter = document.querySelector('#resilt_filter');

        field_ok = true;

        if(field_ok){
            loading.style.display = 'block';
        }
        // simulating form submit

        setTimeout(function(){
            loading.style.display ='none';
        }, 2000); 

        result.style.display ="none";

        removeelm();



        

        // var url = 'https://groupprojectci536.000webhostapp.com/api/data/listing.php?/s?i=computers&rh=n%3A429886031&fs=true&page=2&filter='+lenevo+','+hp+'';


      

        

    var url =  'https://groupprojectci536.000webhostapp.com/api/data/listing.php?/s?i=computers&rh=n%3A429886031&fs=true&page=2&filter='+value[0]+'';
    

        


        
    // make GET request
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function() {
        if (xhr.status == 200) {
            var txt = xhr.responseText;
            var obj = JSON.parse(txt);
            var path = obj.items; 
            path.forEach(function(item) {

                // var proudctLink = document.createElement("a")
                // proudctLink.href = item.href;

                var node = document.createElement('item');
                node.setAttribute('id', 'item');

                var img = document.createElement('img');
                img.src = item.image;
                img.setAttribute('id', 'img');
                node.appendChild(img);

                var title = document.createElement('p');
                title.textContent = item.title;
                title.setAttribute('id', 'title');
                node.appendChild(title);


                var price = document.createElement('p');
                price.textContent = item.price;
                price.setAttribute('id', 'price');
                node.appendChild(price);



                result_filter.appendChild(node);

                // recomendation.appendChild(proudctLink);  
                console.log(result_filter);  
                

            });

                

                 
        } 
    });
    xhr.open('GET', url, true);
    xhr.send();
 
    
    
    });




});
function removeelm() {
    document.querySelector('#resilt_filter').innerHTML='';
}

