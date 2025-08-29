
document.getElementById('set1Grid').addEventListener('click', () => {
    document.getElementById('myGrid').classList.add('one-column');          // Añade la clase para mostrar una columna
    document.getElementById('myGrid').classList.remove('three-column');     // Elimina la clase de tres columnas si existe

    // Mostrar textos de los parrafos
    document.querySelectorAll('.text').forEach(paragraph => {
        paragraph.classList.add('hidden');
    });
    document.querySelectorAll('.text').forEach(paragraph => {
        paragraph.classList.remove('hidden');
    });
});

document.getElementById('set3Grid').addEventListener('click', () => {
    document.getElementById('myGrid').classList.add('three-column');        // Añade la clase para mostrar tres columnas
    document.getElementById('myGrid').classList.remove('one-column');       // Elimina la clase de una columna si existe

    // Ocultar textos de los parrafos
    document.querySelectorAll('.text').forEach(paragraph => {
        paragraph.classList.remove('hidden');
    });
    document.querySelectorAll('.text').forEach(paragraph => {
        paragraph.classList.add('hidden');
    });
});