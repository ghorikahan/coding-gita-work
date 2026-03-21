#include <iostream>
#include <deque>

using namespace std;

int main()
{
    deque<string> d;

    string s;

    for (int i = 0; i < 3; i++)
    {
        cout << i << "string" << endl;
        cin >> s;
        d.push_back(s);
    }

    int val;
    cout << "value " << endl;
    cin >> val;

    if (val < 4 && val > 0)
    {
        cout << d.at(val - 1) << endl;
    }
    else
    {
        cout << "Enter valid value b/w 1-3" << endl;
    }

    for (string c : d)
    {
        cout << c << endl;
    }

    return 0;
}