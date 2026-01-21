// Data Arrays
let students = JSON.parse(localStorage.getItem('gps_students')) || [];

// Open Admin/Admission Modules
function openModule(type) {
    const modal = document.getElementById('admin-modal');
    const content = document.getElementById('modal-content');
    modal.classList.remove('hidden');

    if(type === 'admission') {
        content.innerHTML = `
            <h2 class="text-3xl font-bold text-blue-600 mb-6">Student Admission</h2>
            <form onsubmit="saveStudent(event)" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" id="stuName" placeholder="Full Name" class="p-4 border-2 rounded-2xl" required>
                <input type="text" id="stuParent" placeholder="Parent/Guardian" class="p-4 border-2 rounded-2xl" required>
                <select id="stuClass" class="p-4 border-2 rounded-2xl">
                    <option>Class 1st</option><option>Class 2nd</option><option>Class 3rd</option>
                </select>
                <button type="submit" class="btn-rainbow py-4 col-span-full">Register Little Star ✨</button>
            </form>
        `;
    }
}

function saveStudent(e) {
    e.preventDefault();
    const newStudent = {
        id: "GPS-" + (students.length + 1001),
        name: document.getElementById('stuName').value,
        parent: document.getElementById('stuParent').value,
        class: document.getElementById('stuClass').value
    };
    students.push(newStudent);
    localStorage.setItem('gps_students', JSON.stringify(students));
    alert("Success! Admission No: " + newStudent.id);
    location.reload();
}

function toggleAdminPanel() {
    // Show the database of students
    openModule('database');
    const content = document.getElementById('modal-content');
    content.innerHTML = `<h2 class="text-2xl font-bold mb-4">Student Database</h2>
    <table class="w-full text-left border-collapse">
        <thead><tr class="bg-gray-100"><th class="p-2">ID</th><th class="p-2">Name</th><th class="p-2">Action</th></tr></thead>
        <tbody>${students.map(s => `<tr><td class="p-2">${s.id}</td><td class="p-2">${s.name}</td><td class="p-2 font-bold text-blue-500 cursor-pointer">Print Bonafide</td></tr>`).join('')}</tbody>
    </table>`;
}
// Language Toggle Logic
function toggleLang(lang) {
    const en = document.getElementById('logo-en');
    const ur = document.getElementById('logo-ur');
    if(lang === 'ur') {
        en.classList.add('hidden');
        ur.classList.remove('hidden');
    } else {
        ur.classList.add('hidden');
        en.classList.remove('hidden');
    }
}

// Student Admission Logic
function saveStudent(event) {
    event.preventDefault();
    const student = {
        id: "GPS-" + Date.now(),
        name: document.getElementById('sName').value,
        class: document.getElementById('sClass').value,
        dob: document.getElementById('sDob').value
    };

    let students = JSON.parse(localStorage.getItem('students')) || [];
    students.push(student);
    localStorage.setItem('students', JSON.stringify(students));
    alert("New Star Enrolled! ID: " + student.id);
}

// Module Switcher
function showModule(module) {
    const container = document.getElementById('module-container');
    container.classList.remove('hidden');
    
    if(module === 'admission') {
        container.innerHTML = `
            <h2 class="text-2xl font-bold mb-4 text-purple-600">Admission Form</h2>
            <form onsubmit="saveStudent(event)" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" id="sName" placeholder="Child's Name" class="p-3 border-2 rounded-xl" required>
                <select id="sClass" class="p-3 border-2 rounded-xl">
                    <option>1st Primary</option>
                    <option>2nd Primary</option>
                    <option>3rd Primary</option>
                </select>
                <input type="date" id="sDob" class="p-3 border-2 rounded-xl" required>
                <button type="submit" class="btn-rainbow col-span-full">Register Student</button>
            </form>
        `;
    }
}
