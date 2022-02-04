let employee = {
  name: "Sam",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  let newEmployee = { ...employee, [key]: value };
  return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  console.log({ ...employee, [key]: value });
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  console.log({ ...employee });
  let newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  console.log({ ...employee, key });
  let newEmployee = { ...employee, key };
  delete employee[key];
  return employee;
}
