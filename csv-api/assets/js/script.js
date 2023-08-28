document.addEventListener('DOMContentLoaded', () => {
    const dataList = document.getElementById('data-list');

    fetch('/api/data')
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const listItem = document.createElement('li');
                listItem.innerText = `ID: ${item.id}, Nombre: ${item.nombre}, Apellido: ${item.apellido}`;
                dataList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });
});
