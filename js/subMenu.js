export default function subMenu() {
    document.addEventListener("DOMContentLoaded", function(){
        // make it as accordion for smaller screens
        if (window.innerWidth < 992) {
            document.querySelectorAll('.dropdown-menu a').forEach(function(element){
                element.addEventListener('click', function (e) {
                    let nextEl = this.nextElementSibling;
                    if(nextEl && nextEl.classList.contains('submenu')) {	
                    // prevent opening link if link needs to open dropdown
                    e.preventDefault();
                    nextEl.classList.contains('show') ? nextEl.classList.remove('show') : nextEl.classList.add('show')
            
                    }
                });
            })
        }
        // end if innerWidth
    }); 
        // DOMContentLoaded  end
}