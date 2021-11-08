const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function(e){
    const id = e.target.dataset.id;
    if(id){

        // remove active from other buttons
        btns.forEach(function(btn){

            // Removing class active on all buttons when click on a button
            btn.classList.remove('active');
            // Adding class active when clicking on that specific button
            e.target.classList.add('active');

        });

        // hide all articles
        articles.forEach(function(article){
            article.classList.remove('active');
        });

        const element = document.getElementById(id);
        element.classList.add('active');
    }
});