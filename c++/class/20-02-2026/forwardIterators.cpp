#include <iostream>
#include <vector>
#include <list>
#include <set>
#include <map>
#include <string>

using namespace std;

int main()
{

    cout << "Vector Element are beign printed one by one..." << endl;

    vector<char> v1 = {'A', 'y', 'R', 'g'};

    auto itr = v1.begin();

    while (itr != v1.end())
    {
        cout << "Forwrd Iterator current value:  " << *itr << endl;
        ++itr;
    }

    cout << "List Element are beign printed one by one..." << endl;

    list<int> l1 = {1, 2, 3, 4, 5, 6, -90, 67};

    auto itr1 = l1.begin();

    while (itr1 != l1.end())
    {
        cout << "Forwarrd Iterator current value:  " << *itr1 << endl;
        ++itr1;
    }

    cout << "Set Element are beign printed one by one..." << endl;

    set<string> s1 = {"Samir singh", "amit singh", "sumit"};

    auto itr2 = s1.begin();

    while (itr2 != s1.end())
    {
        cout << "Forwarrd Iterator current value:  " << *itr2 << endl;
        ++itr2;
    }

    cout << "Map Element are beign printed one by one..." << endl;

    map<int, string> m1;

    m1[0] = "Samir1";
    m1[1] = "amit1";
    m1[2] = "saurav";

    auto itr3 = m1.begin();

    while (itr3 != m1.end())
    {
        cout << "Forward Iterator and tthe keyy is:  " << itr3->first << "it's value is:  " << itr3->second << endl;
        ++itr3;
    }

    return 0;
}