#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main()
{

    vector<int> v1 = {2, 45, 6, 7, 8, 2, 56};

    auto itr = find(v1.begin(), v1.end(), 8);

    if (itr != v1.end())
    {
        cout << "Element is:  " << *itr << endl;
    }
    else
    {
        cout << "Element doesn't exist" << endl;
    }

    return 0;
}