// Ambil elemen penting
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const dateElement = document.getElementById('date');
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const finishBtn = document.getElementById('finish-btn');

// Tampilkan tanggal hari ini
const today = new Date();
dateElement.textContent = today.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

// Toggle sidebar
menuToggle.addEventListener('click', () => {
    const isOpen = sidebar.style.transform === 'translateX(0px)';
    sidebar.style.transform = isOpen ? 'translateX(-200px)' : 'translateX(0px)';
});

// Fungsi untuk menambahkan item ke To-Do List
function addTodo() {
    const todoText = todoInput.value.trim();
    if (!todoText) {
        alert('Masukkan kegiatan terlebih dahulu!');
        return;
    }

    // Buat elemen baru untuk item To-Do
    const li = document.createElement('li');
    const textSpan = document.createElement('span');
    textSpan.textContent = todoText;

    // Tombol hapus
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Hapus';
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    // Tambahkan elemen ke list
    li.appendChild(textSpan);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    // Kosongkan input
    todoInput.value = '';
}

// Tambahkan event listener untuk tombol tambah
addBtn.addEventListener('click', addTodo);

// Tambahkan dengan tombol Enter
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
});

// Fungsi untuk menyelesaikan daftar hari ini
function finishTodos() {
    if (todoList.children.length === 0) {
        alert('Tidak ada daftar untuk diselesaikan.');
        return;
    }

    const completedTodos = [];
    Array.from(todoList.children).forEach((li) => {
        completedTodos.push(li.firstChild.textContent);
    });

    // Simpan ke LocalStorage sebagai riwayat
    const history = JSON.parse(localStorage.getItem('history')) || [];
    history.push({
        date: today.toLocaleDateString('id-ID'),
        todos: completedTodos,
    });
    localStorage.setItem('history', JSON.stringify(history));

    // Kosongkan daftar
    todoList.innerHTML = '';
    alert('To-Do List hari ini telah disimpan ke riwayat.');
}

// Tambahkan event listener untuk tombol selesai
finishBtn.addEventListener('click', finishTodos);
