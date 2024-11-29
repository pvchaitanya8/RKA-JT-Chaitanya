document.getElementById('employeeForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const newEmployee = {
        name: document.getElementById('name').value,
        position: document.getElementById('position').value,
        about: document.getElementById('about').value,
        joining_date: document.getElementById('joining_date').value,
    };

    const employees = getEmployees();
    employees.push(newEmployee);
    saveEmployees(employees);
    window.location.href = 'list.html';
});
