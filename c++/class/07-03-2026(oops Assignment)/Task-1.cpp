#include <stdio.h>
#include <string>
using namespace std;
class book
{
public:
    int book_id;
    string book_name;
    int price;

    book(int id, string name, int price)
    {
        this->book_id = id;
        this->book_name = name;
        this->price = price;
    }

    void display() {
        cout << book_id << endl;
        cout << book_name << endl;
        cout << price << endl;
    }
}

int main()
{

    book b1(1,"maths",100);
    book b2(2,"English",100);
    book b3(3,"science",100);

    b1.display();
    b2.display();
    b3.display();

    return 0;
}