#include <iostream>
#include <list>
using namespace std;

int main()
{

    list<int> l = {1, 2, 3, 4, 5};

    l.push_front(0);

    for (int value : l)
    {
        cout << value << " ";
    }

    l.push_back(6);

    for (int value : l)
    {
        cout << value << " ";
    }

    l.pop_back();

    for (int value : l)
    {
        cout << value << " ";
    }

    l.pop_front();

    for (int value : l)
    {
        cout << value << " ";
    }

    return 0;
}