#include <iostream>
#include <vector>
using namespace std;

int main()
{

    vector<int> hours={0,1,2,3,4};
    int target = 2;
    int count = 0;
    for (int i = 0; i < hours.size(); i++)
    {
        if (hours[i] >= target)
        {
            count++;
        }
    }

    return count;
    return 0;
}