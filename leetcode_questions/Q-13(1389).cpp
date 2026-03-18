#include <iostream>
#include <vector>
using namespace std;

int main()
{
    vector<int> nums = {0, 1, 2, 3, 4};
    vector<int> index = {0, 1, 2, 2, 1};
    vector<int> res;
    int j = 0;
    for (int i = 0; i < nums.size(); i++)
    {
        res.insert(res.begin() + index[j], nums[i]);
        j++;
    }

    return res;
    return 0;
}