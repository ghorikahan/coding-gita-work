#include <iostream>
#include <string>

using namespace std;

class Person
{
public:
    string name;
    int age;
    Person(string name, int age)
    {
        this->name = name;
        this->age = age;
    }
    void display()
    {
        cout << "employee name is: " << name << endl
             << "age of employee is " << age << endl;
    }
};

class Employee : public Person
{
public:
    int emp_id;
    int salary;
    Employee(int emp_id, int salary, string name, int age) : Person(name, age)
    {
        this->emp_id = emp_id;
        this->salary = salary;
    }
    void display2()
    {
        cout << "employee id is: " << emp_id << endl
             << "salary of employee is " << salary << endl;
    }
};

class Manager : public Employee
{
public:
    string department;
    Manager(string department, int emp_id, int salary, string name, int age) : Employee(emp_id, salary, name, age)
    {
        this->department = department;
    }
    void display3()
    {
        cout << "employee's departmnt is: " << department << endl;
    }
};

int main()
{
    Manager m1("IT", 1, 200000, "deepak", 20);
    m1.display();
    m1.display2();
    m1.display3();
    return 0;
}