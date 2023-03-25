// Write your solution in this file!

const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway',
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
} ;

updateEmployeeWithKeyAndValue() ;


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
};

destructivelyUpdateEmployeeWithKeyAndValue();


delete employee[key];
employee.name = 'Sam';
employee.streetAddress = '11 Broadway';

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
};

deleteFromEmployeeByKey();

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

destructivelyDeleteFromEmployeeByKey();

delete employee[key];
employee.name = 'Sam';
employee.streetAddress = '11 Broadway';

