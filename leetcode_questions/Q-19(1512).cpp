#include <iostream>
#include <vector>
using namespace std;

int main()
{
    vector<int> nums = {1, 2, 3, 1, 1, 3};
    int count = 0;

    for (int i = 0; i < nums.size(); i++)
    {
        for (int j = 0; j < nums.size(); j++)
        {
            if (nums[i] == nums[j] && i < j)
            {
                count++;
            }
        }
    }

    return count;
    return 0;
}