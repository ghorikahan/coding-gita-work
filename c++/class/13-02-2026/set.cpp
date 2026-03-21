#include <iostream>
#include <set>
using namespace std;

int main()
{
    set<int> s = {2, 87, 0, 1, 244};

    for (int value : s)
    {
        cout << value << endl;
    }

    s.insert(45);

    for (int value : s)
    {
        cout << value << endl;
    }

    s.erase(45);

    for (int value : s)
    {
        cout << value << endl;
    }

    auto it = s.find(45);

    if (it != s.end())
    {
        cout << "Found: " << *it << endl;
    }
    else
    {
        cout << "Not found: " << *it << endl;
    }

    
    return 0;
}