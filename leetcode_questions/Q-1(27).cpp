#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{

    vector<int> nums = {0, 5, 0, 3, 6};

    sort(nums.begin(), nums.end());

    for (int i = 0; i < nums.size() - 1; i++)
    {
        if (nums[i] == nums[i + 1])
        {
            return true;
        }
    }

    return false;

    return 0;
}