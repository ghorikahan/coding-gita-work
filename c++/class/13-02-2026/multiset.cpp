#include <iostream>
#include <set>

using namespace std;

int main()
{

    multiset<int> ms = {2, 3, 2, 5, 8, 23, 4};

    for (int value : ms)
    {
        cout << value << endl;
    }

    ms.count(2);

    return 0;
}