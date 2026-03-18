#include <iostream>
#include <vector>
using namespace std;

int main()
{
    int n = 234;
    int pro = 1;
    int sum = 0;
    int newn = n;

    while (n > 0)
    {
        pro = pro * (n % 10);
        n = n / 10;
    }
    while (newn > 0)
    {
        sum = sum + (newn % 10);
        newn = newn / 10;
    }

    int res = pro - sum;

    return res;
    return 0;
}