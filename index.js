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

    // const productContainers = [...document.querySelectorAll('#recomendation')];
    // const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
    // const preBtn = [...document.querySelectorAll('.pre-btn')];

    // productContainers.forEach((item, i) => {
    //     let containerDimensions = item.getBoundingClientRect();
    //     let containerWidth = containerDimensions.width;

    //     nxtBtn[i].addEventListener('click', () => {
    //         item.scrollLeft += containerWidth;
    //     })

    //     preBtn[i].addEventListener('click', () => {
    //         item.scrollLeft -= containerWidth;
    //     })
    // })

    

   



    // latest gadgets 
    

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







