#include <iostream>
#include <map>
using namespace std;

int main()
{
    map<int, string> m1;

    m1[3] = "kahan";
    m1[1] = "Ghori";

    for (auto &[key, value] : m1)
    {
        cout << "key is: " << key << "and it's value is : " << value << endl;
    }

    return 0;
}