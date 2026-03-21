#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main()
{
    vector<int> v = {};
    int n = 5;
    int x = 0;

    while (n > 0)
    {
        cout << "Enter a number : " << endl;
        cin >> x;
        v.push_back(x);
        --n;
    }

    sort(v.begin(), v.end());

    for (int value : v)
    {
        cout << value << endl;
    }

    return 0;
}