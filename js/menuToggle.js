// Cambiar menú mostrado

function mostrarMenu(menuId) {
        var menu1 = document.getElementById('menu1');
        var menu2 = document.getElementById('menu2');
    
        if (menuId === 'menu1') {
            menu1.style.display = 'block';
            menu2.style.display = 'none';
        } else {
            menu1.style.display = 'none';
            menu2.style.display = 'block';
        }
    }