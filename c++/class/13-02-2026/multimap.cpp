#include <iostream>
#include <map>
using namespace std;

int main()
{
    multimap<int, string> m1;

    m1.insert({1, "kahan"});
    m1.insert({2, "tapan"});
    m1.insert({1, "jivan"});

    for (auto &[key, value] : m1)
    {
        cout << "the current key is :" << key << "and the value is : " << value << endl;
    }

    return 0;
}