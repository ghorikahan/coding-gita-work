/*Q16. Write a program using a while loop to calculate the sum of numbers from 1 to 50.*/
#include <stdio.h>
int main()
{
    int a = 1;
    int sum = 0;
    while (a <= 50)
    {
        sum = sum + a;

        a++;
    }
    printf("%d\n", sum);

    return 0;
}