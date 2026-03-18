#include <iostream>
#include <vector>
using namespace std;

int main()
{
    vector<int> nums = {8, 1, 2, 2, 3};
    vector<int> res;

    for (int i = 0; i < nums.size(); i++)
    {
        int count = 0;
        for (int j = 0; j < nums.size(); j++)
        {
            if (j != i && nums[j] < nums[i])
            {
                count++;
            }
        }
        res.push_back(count);
    }

    return res;
    return 0;
}