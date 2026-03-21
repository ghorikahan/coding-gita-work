#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector<int> v = {1, 2, 3};

    v.push_back(4);

    for (int value : v)
    {
        cout << value << " ";
    }

    v.pop_back();

    for (int value : v)
    {
        cout << value << " ";
    }

    
    return 0;
}