#include <iostream>

using namespace std;

class Rectangle;

class Triangle
{

private:
    int width, height;

public:
    Triangle(int width, int height)
    {
        this->width = width;
        this->height = height;
        cout << "The data is intialized inside Triangle data members" << endl;
    }

    friend void calculate(Triangle &t1, Rectangle &R1);
};

class Rectangle
{

private:
    int width, height;

public:
    Rectangle(int width, int height)
    {
        this->width = width;
        this->height = height;
        cout << "The data is intialized inside a rectangle data members" << endl;
    }

    friend void calculate(Triangle &t1, Rectangle &R1);

    friend class Child2;
};

class Child2
{

public:
    Child2(Rectangle &r1)
    {
        cout << "The value of width in Rectangle is: ->" << r1.width;
    }
};

void calculate(Triangle &t1, Rectangle &R1)
{
    cout << "The value of width in Triangle is: ->" << t1.width;
    cout << "The value of width in Rectangle is: ->" << R1.width;
}

int main()
{

    // Triangle T1(34, 56);
    // Rectangle R1(56, 89);

    // calculate(T1, R1);

    Rectangle r1(56, 78);
    Child2 c1(r1);
    return 0;
}
