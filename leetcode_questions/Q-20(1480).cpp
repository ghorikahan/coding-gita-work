#include <iostream>
#include <vector>
using namespace std;

int main()
{
    vector<int> nums = {1, 2, 3, 1, 1, 3};
    vector<int> arr;
        for (int i = 0; i < nums.size(); i++) {
            int sum = nums[i];
            for (int j = 0; j < i; j++) {
                sum += nums[j];
            }
            arr.push_back(sum);
        }

        return arr;
    return 0;
}