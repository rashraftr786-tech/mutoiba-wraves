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
