function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
window.addEventListener("load", function (evt) {

    evt.preventDefault();

    var loading = document.querySelector('.loader-wrapper');
    var result = document.querySelector('#result');
    var recomendation = document.querySelector('#recomendation');
    var latestGatdgets = document.querySelector('#LatestGadgets');
    var bestSellingGatdgets = document.querySelector('#BestsellingGadgets');

    field_ok = true;

    if(field_ok){
        loading.style.display = 'block';
        result.style.display = 'none';
    }
    // simulating form submit

    setTimeout(function(){
        loading.style.display ='none';
        result.style.display = 'block';
    }, 2000);



    document.querySelector('#search_form').addEventListener('submit', function(e){
        e.preventDefault();
        removeelm();


        // field_ok = true;

        // if(field_ok){
        //     loading.style.display = 'block';
        //     result.style.display = 'none';
        // }
        // // simulating form submit

        // setTimeout(function(){
        //     loading.style.display ='none';
        //     result.style.display = 'block';
        // }, 7000);

       




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

                    result.appendChild(proudctLink);
        
                });

                    

                    
            } 
        });
        xhr.open('GET', url, true);
        xhr.send();
        

    })









    

    // server script accepting the data
    var url = 'https://cheapfindsapi.000webhostapp.com/api/data/recommend.php?id=428651031';
        
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

                recomendation.appendChild(proudctLink);
                /*
                var node = document.createElement('item');

                
                // geting image 
                
                //create title div
                var title = document.createElement('h3');
                title.textContent = item.title;
                recomendation.appendChild(title);
                */

                

                

                
                

            });

                

                 
        } 
    });
    xhr.open('GET', url, true);
    xhr.send();

   

    

   



    // latest gadgets 
    

    var latestGatdgetsUrl = 'https://cheapfindsapi.000webhostapp.com/api/data/recommend.php?id=428652031';


    var xhr2 = new XMLHttpRequest();
    xhr2.addEventListener("load", function() {
        if (xhr2.status == 200) {
            var txt = xhr2.responseText;
            var obj = JSON.parse(txt);
            var path = obj.items; 
            path.forEach(function(item) {

                var proudctLink = document.createElement("a")
                proudctLink.href = item.href;

                var node = document.createElement('item');

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

                latestGatdgets.appendChild(proudctLink);
                /*
                var node = document.createElement('item');

                
                // geting image 
                
                //create title div
                var title = document.createElement('h3');
                title.textContent = item.title;
                recomendation.appendChild(title);
                */

            });

                

                 
        } 
    });
    xhr2.open('GET', latestGatdgetsUrl, true);
    xhr2.send();

    // best seller gadgets
    

    var bestSellingGatdgetsUrl = 'https://cheapfindsapi.000webhostapp.com/api/data/recommend.php?id=429886031';
    

    var xhr1 = new XMLHttpRequest();
    xhr1.addEventListener("load", function() {
        if (xhr1.status == 200) {
            var txt = xhr1.responseText;
            var obj = JSON.parse(txt);
            var path = obj.items; 
            path.forEach(function(item) {

                var proudctLink = document.createElement("a")
                proudctLink.href = item.href;

                var node = document.createElement('item');

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

                bestSellingGatdgets.appendChild(proudctLink);
                /*
                var node = document.createElement('item');

                
                // geting image 
                
                //create title div
                var title = document.createElement('h3');
                title.textContent = item.title;
                recomendation.appendChild(title);
                */

            });

                

                 
        } 
    });
    xhr1.open('GET', bestSellingGatdgetsUrl, true);
    xhr1.send();


   
 
    
    
});


function removeelm() {
    document.querySelector('#result').innerHTML='';
    
}







