#include <iostream>
#include <stdio.h>
using namespace std;

int main()
{

    int a;

    cin >> a;

    if (a > 0)
    {
        std::cout << "positive";
    }
    if (a < 0)
    {
        std::cout << "negative";
    }
    else
    {
        std::cout << "Zero";
    }

    return 0;
}