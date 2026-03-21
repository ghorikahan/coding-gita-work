#include <iostream>
using namespace std;

class Car{
    public:
    string car_name;
    int price;
    static int totalCars;

    Car(string car, int p) {
        car_name = car;
        price = p;
        totalCars++;
        cout<<"Total Cars   "<<" "<< totalCars <<endl;
    }

};

int Car :: totalCars = 0;

int main() {
    Car c1("BMW",58584855);
    Car c2("CMW",585855);
    Car c3("DMW",585);


    return 0;
}