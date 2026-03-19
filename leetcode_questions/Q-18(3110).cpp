#include <iostream>
#include <vector>
using namespace std;

int main()
{
    string s = "hello";
    vector<int> num;
    int res = 0;
    for (int i = 0; i < s.length(); i++)
    {
        num.push_back(int(s[i]));
    }

    for (int j = 0; j < num.size(); j++)
    {
        if (j == num.size() - 1)
        {
            continue;
        }
        res = res + abs(num[j] - num[j + 1]);
    }

    return res;
    return 0;
}