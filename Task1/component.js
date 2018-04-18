(function() {

    document.querySelectorAll("[data-delete-game]").forEach(function(delItem){
        delItem.addEventListener("click", function(e) {
            e.target.parentElement.remove();            
            e.target.removeEventListener('click', function(){});
        });
    });

})();