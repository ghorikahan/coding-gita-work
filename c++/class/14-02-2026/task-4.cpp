#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector<int> v(10);

    cout << "enter 10 elements" << endl;
    for (int i = 0; i < 10; i++)
    {
        cin >> v[i];
    }

    for (int i = 9; i >= 0; i--)
    {
        if (i % 2 == 0)
        {
            v.erase(v.begin() + i);
            cout << "Index element that is removed" << i << endl;
        }
    }

    cout << "remaining element are :- " << endl;
    for (int val : v)
    {
        cout << val << " ";
    }
    cout << "total size" << v.size() << endl;

    return 0;
}