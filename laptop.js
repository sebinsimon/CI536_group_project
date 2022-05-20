function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


window.addEventListener("load", function (evt) {

    
    evt.preventDefault();

    var loading = document.querySelector('.loader-wrapper');
    var laptop = document.querySelector('#laptop');
    var laptop_result = document.querySelector('#laptop_result');

    


    field_ok = true;

    if(field_ok){
        loading.style.display = 'block';
        laptop.style.display = 'none';
    }
    // simulating form submit

    setTimeout(function(){
        loading.style.display ='none';
        laptop.style.display = 'block';
    }, 7000);


    

    document.querySelector('#search_form').addEventListener('submit', function(e){
        e.preventDefault();
        removeelm();
        var search_value = document.querySelector('#search_x').value.trim();


        field_ok = true;

        if(field_ok){
            loading.style.display = 'block';
            laptop.style.display = 'none';
        }
        // simulating form submit
    
        setTimeout(function(){
            loading.style.display ='none';
            laptop.style.display = 'block';
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

                    laptop_result.appendChild(proudctLink);
        
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
            var checkboxes = document.getElementsByName('brands');


            field_ok = true;

            if(field_ok){
                loading.style.display = 'block';
                laptop.style.display = 'none';
            }
            // simulating form submit
        
            setTimeout(function(){
                loading.style.display ='none';
                laptop.style.display = 'block';
            }, 7000);





            for(var i=0; i<checkboxes.length; i++){
                if(checkboxes[i].checked == true){
                    value.push(checkboxes[i].value);
                
                }
            }  

            
            // var url = 'https://cheapfindsapi.000webhostapp.com/api/data/listing.php?/s?i=computers&rh=n%3A429886031&fs=true&page=1&filter='+value.toString()+'';
            var url = 'https://cheapfindsapi.000webhostapp.com/api/data/listing.php?s?k='+value.toString()+'&i=computers&rh=n%3A429886031&page=2&filter='+value.toString()+'';

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

                    laptop_result.appendChild(proudctLink);
        
                });

                    

                    
            } 
        });
        xhr.open('GET', url, true);
        xhr.send();
        value = [];
        })

   
    

    // server script accepting the data
    // var url = 'https://groupprojectci536.000webhostapp.com/api/data/recommend.php?id=429886031';
    var url = 'https://cheapfindsapi.000webhostapp.com/api/data/listing.php?/s?i=computers&rh=n%3A429886031&fs=true&page=2';
   
        
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

                laptop_result.appendChild(proudctLink);
     
            });

                

                 
        } 
    });
    xhr.open('GET', url, true);
    xhr.send();


 
});

function removeelm() {
    document.querySelector('#laptop_result').innerHTML='';
}