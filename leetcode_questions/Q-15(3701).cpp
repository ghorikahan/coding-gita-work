#include <iostream>
#include <vector>
using namespace std;

int main()
{
    vector<int> nums = {1, 3, 5, 7};
    int num = 0;
    int evenIndex = 0;
    int oddIndex = 0;
    for (int i = 0; i < nums.size(); i++)
    {
        if (i % 2 == 0)
        {
            evenIndex = evenIndex + nums[i];
        }
        else
        {
            oddIndex = oddIndex + nums[i];
        }
    }
    num = evenIndex - oddIndex;

    return num;
    return 0;
}