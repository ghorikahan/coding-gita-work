#include <iostream>
#include <stdio.h>

using namespace std;

int main()
{

    printf("enter the numnber of data you want in array");
    int n = 5;
    int arr[n];
    int sum = 0;
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);
    }
    for (int i = 0; i < n; i++)
    {
        sum = arr[i] + sum;
    }
    int avg = sum / n;

    for (int i = 0; i < n; i++)
    {
        if (avg < arr[i])
        {
            printf("%d", arr[i]);
        }
    }

    return 0;
}