function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
window.addEventListener("load", function (evt) {

    evt.preventDefault();

    var loading = document.querySelector('.loader-wrapper');
    var mobile = document.querySelector('#mobile');
    var mobile_result = document.querySelector('#mobile_result');


    field_ok = true;

    if(field_ok){
        loading.style.display = 'block';
        mobile.style.display = 'none';
    }
    // simulating form submit

    setTimeout(function(){
        loading.style.display ='none';
        mobile.style.display = 'block';
    }, 7000);


    document.querySelector('#search_form').addEventListener('submit', function(e){
        e.preventDefault();
        removeelm();

        if(field_ok){
            loading.style.display = 'block';
            mobile.style.display = 'none';
        }
        // simulating form submit
    
        setTimeout(function(){
            loading.style.display ='none';
            mobile.style.display = 'block';
        }, 7000);




        var search_value = document.querySelector('#search_x').value.trim();
        
        var url = 'https://cheapfindsapi.000webhostapp.com/api/data/search.php?'+search_value+'';
   
        
        // make GET request
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("load", function() {
            if (xhr.status == 200) {
                var txt = xhr.responseText;
                var obj = JSON.parse(txt);
                var path = obj.items; 
                path.forEach(function(item) {

                    var proudctLink = document.createElement("a")
                    proudctLink.href = item.href;

                    var node = document.createElement('item');
                    node.setAttribute('id', 'item');

                    var img = document.createElement('img');
                    img.src = item.image;
                    img.setAttribute('id', 'img_1');
                    node.appendChild(img);

                    var title = document.createElement('p');
                    title.textContent = item.title;
                    title.setAttribute('id', 'title');
                    node.appendChild(title);


                    var price = document.createElement('p');
                    price.textContent = item.price;
                    price.setAttribute('id', 'price');
                    node.appendChild(price);



                    proudctLink.appendChild(node);

                    mobile_result.appendChild(proudctLink);
        
                });

                    

                    
            } 
        });
        xhr.open('GET', url, true);
        xhr.send();
        

    })

   


   


    var form = document.getElementById('form');

        var value = [];
        form.addEventListener('submit', function(e){
            e.preventDefault();
            removeelm();

            if(field_ok){
                loading.style.display = 'block';
                mobile.style.display = 'none';
            }
            // simulating form submit
        
            setTimeout(function(){
                loading.style.display ='none';
                mobile.style.display = 'block';
            }, 7000);





            var checkboxes = document.getElementsByName('brands');
            for(var i=0; i<checkboxes.length; i++){
                if(checkboxes[i].checked == true){
                    value.push(checkboxes[i].value);
                
                }
            }  

            
            // var url = 'https://cheapfindsapi.000webhostapp.com/api/data/listing.php?/mobile/s?k=mobile&page=1&qid=1652893843&ref=sr_pg_2&filter='+value.toString()+'';
            var url = 'https://cheapfindsapi.000webhostapp.com/api/data/listing.php?s?k='+value.toString()+'+s22&i=electronics&rh=n%3A5362060031&dc&page=2&filter='+value.toString()+'';

            var xhr = new XMLHttpRequest();
        xhr.addEventListener("load", function() {
            if (xhr.status == 200) {
                var txt = xhr.responseText;
                var obj = JSON.parse(txt);
                var path = obj.items; 
                path.forEach(function(item) {

                    var proudctLink = document.createElement("a")
                    proudctLink.href = item.href;

                    var node = document.createElement('item');
                    node.setAttribute('id', 'item');

                    var img = document.createElement('img');
                    img.src = item.image;
                    img.setAttribute('id', 'img_1');
                    node.appendChild(img);

                    var title = document.createElement('p');
                    title.textContent = item.title;
                    title.setAttribute('id', 'title');
                    node.appendChild(title);


                    var price = document.createElement('p');
                    price.textContent = item.price;
                    price.setAttribute('id', 'price');
                    node.appendChild(price);



                    proudctLink.appendChild(node);

                    mobile_result.appendChild(proudctLink);
        
                });

                    

                    
            } 
        });
        xhr.open('GET', url, true);
        xhr.send();
        value = [];
        })








    

    // server script accepting the data
    var url = 'https://cheapfindsapi.000webhostapp.com/api/data/listing.php?/mobile/s?k=mobile&page=2&qid=1652893843&ref=sr_pg_2';
        
    // make GET request
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function() {
        if (xhr.status == 200) {
            var txt = xhr.responseText;
            var obj = JSON.parse(txt);
            var path = obj.items; 
            path.forEach(function(item) {

                var proudctLink = document.createElement("a")
                proudctLink.href = item.href;

                var node = document.createElement('item');
                node.setAttribute('id', 'item');

                var img = document.createElement('img');
                img.src = item.image;
                img.setAttribute('id', 'img_1');
                node.appendChild(img);

                var title = document.createElement('p');
                title.textContent = item.title;
                title.setAttribute('id', 'title');
                node.appendChild(title);


                var price = document.createElement('p');
                price.textContent = item.price;
                price.setAttribute('id', 'price');
                node.appendChild(price);



                proudctLink.appendChild(node);

                mobile_result.appendChild(proudctLink);
     
            });

                

                 
        } 
    });
    xhr.open('GET', url, true);
    xhr.send();
 
});

function removeelm() {
    document.querySelector('#mobile_result').innerHTML='';
}