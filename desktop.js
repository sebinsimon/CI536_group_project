function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


window.addEventListener("load", function (evt) {

    
    evt.preventDefault();

    var loading = document.querySelector('.loader-wrapper');
    var desktop = document.querySelector('#desktop');
    var desktop_result = document.querySelector('#desktop_result');

    


    field_ok = true;

    if(field_ok){
        loading.style.display = 'block';
        desktop.style.display = 'none';
    }
    // simulating form submit

    setTimeout(function(){
        loading.style.display ='none';
        desktop.style.display = 'block';
    }, 7000);


    

    document.querySelector('#search_form').addEventListener('submit', function(e){
        e.preventDefault();
        removeelm();
        var search_value = document.querySelector('#search_x').value.trim();


        field_ok = true;

    if(field_ok){
        loading.style.display = 'block';
        desktop.style.display = 'none';
    }
    // simulating form submit

    setTimeout(function(){
        loading.style.display ='none';
        desktop.style.display = 'block';
    }, 7000);





        
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



                    proudctLink.appendChild(node);

                    desktop_result.appendChild(proudctLink);
        
                });

                    

                    
            } 
        });
        xhr.open('GET', url, true);
        xhr.send();
        

    })

   


   

    // filter

    var form = document.getElementById('form');

        var value = [];
        form.addEventListener('submit', function(e){
            e.preventDefault();
            removeelm();


            field_ok = true;

            if(field_ok){
                loading.style.display = 'block';
                desktop.style.display = 'none';
            }
            // simulating form submit

            setTimeout(function(){
                loading.style.display ='none';
                desktop.style.display = 'block';
            }, 7000);





            var checkboxes = document.getElementsByName('brands');
            for(var i=0; i<checkboxes.length; i++){
                if(checkboxes[i].checked == true){
                    value.push(checkboxes[i].value);
                
                }
            }  

            
            // var url = 'https://cheapfindsapi.000webhostapp.com/api/data/listing.php?/desktop/s?k=desktop&page=2&qid=1652964273&ref=sr_pg_1&filter='+value.toString()+'';
            var url = 'https://cheapfindsapi.000webhostapp.com/api/data/listing.php?s?k='+value.toString()+'&i=computers&rh=n%3A340831031%2Cn%3A428651031&dc&page=2&filter='+value.toString()+'';
            
            

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



                    proudctLink.appendChild(node);

                    desktop_result.appendChild(proudctLink);
        
                });

                    

                    
            } 
        });
        xhr.open('GET', url, true);
        xhr.send();
        value = [];
        })

   
    

    // server script accepting the data
    // var url = 'https://groupprojectci536.000webhostapp.com/api/data/recommend.php?id=429886031';
    var url = 'https://cheapfindsapi.000webhostapp.com/api/data/listing.php?/desktop/s?k=desktop&page=2&qid=1652964273&ref=sr_pg_2';
   
        
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



                proudctLink.appendChild(node);

                desktop_result.appendChild(proudctLink);
     
            });

                

                 
        } 
    });
    xhr.open('GET', url, true);
    xhr.send();


 
});

function removeelm() {
    document.querySelector('#desktop_result').innerHTML='';
}