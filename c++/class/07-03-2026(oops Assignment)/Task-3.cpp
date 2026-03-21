#include <iostream>
using namespace std;
class Shape
{
public:
    int length;
    int width;

    Shape(int length, int width)
    {
        this->length = length;
        this->width = width;
    }
};

class Rectangle : public Shape
{
public:
    int area;
    Rectangle(int length, int width) : Shape(length, width)
    {
        area = length * width;
    }
    void displayR()
    {
        cout << "The area of the Rectangle is : " << area << endl;
    }
};

class Triangle : public Shape
{
public:
    int area;
    Triangle(int length, int width) : Shape(length, width)
    {
        area = length * width * 0.5;
    }
    void displayT()
    {
        cout << "The area of the Traingle is : " << area << endl;
    }
};

int main()
{
    Rectangle r1(5, 6);
    Triangle t1(5, 6);

    r1.displayR();
    t1.displayT();

    return 0;
}