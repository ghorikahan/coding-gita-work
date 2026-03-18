#include <iostream>
#include <cmath>

using namespace std;

int main()
{
    int n = 5;
    for (int i = 0; i < 90; i++)
    {
        double power = pow(2, i);
        if (power == n)
        {
            return true;
        }
    }
    return false;

    return 0;
}