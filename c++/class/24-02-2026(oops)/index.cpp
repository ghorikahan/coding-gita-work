#include <iostream>
#include <string>

using namespace std;

class Car
{
public:
    string comp_name;
    int mileage;
    string engine;

    void print()
    {
        cout << "the print function is defined insde Car class" << endl;
        cout << " Company name is : " << this->comp_name << endl;
    }
};

int main()
{

    cout << "Now creating the actual object of the class -> Car" << endl;

    Car c1;

    c1.comp_name = "Honda";
    c1.mileage = 500;
    c1.engine = "V12";

    cout << " The data is inserted succesfully... " << endl;

    c1.print(); // or we can write display inplace of print...

    return 0;
}
