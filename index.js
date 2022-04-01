window.addEventListener("load", function (evt) {

   

    evt.preventDefault();
    var recomendation = document.querySelector('#recomendation');

    // server script accepting the data
    var url = 'https://groupprojectci536.000webhostapp.com/api/data/recommend.php?id=428651031';
        
    // make GET request
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function() {
        if (xhr.status == 200) {
            var txt = xhr.responseText;
            var obj = JSON.parse(txt);
            var path = obj.items; 
            path.forEach(function(item) {

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



                recomendation.appendChild(node);
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
    var latestGatdgets = document.querySelector('#LatestGadgets');

    var latestGatdgetsUrl = 'https://groupprojectci536.000webhostapp.com/api/data/recommend.php?id=428652031';


    var xhr2 = new XMLHttpRequest();
    xhr2.addEventListener("load", function() {
        if (xhr2.status == 200) {
            var txt = xhr2.responseText;
            var obj = JSON.parse(txt);
            var path = obj.items; 
            path.forEach(function(item) {

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



                latestGatdgets.appendChild(node);
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
    var bestSellingGatdgets = document.querySelector('#BestsellingGadgets');

    var bestSellingGatdgetsUrl = 'https://groupprojectci536.000webhostapp.com/api/data/recommend.php?id=429886031';
    

    var xhr1 = new XMLHttpRequest();
    xhr1.addEventListener("load", function() {
        if (xhr1.status == 200) {
            var txt = xhr1.responseText;
            var obj = JSON.parse(txt);
            var path = obj.items; 
            path.forEach(function(item) {

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



                bestSellingGatdgets.appendChild(node);
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







