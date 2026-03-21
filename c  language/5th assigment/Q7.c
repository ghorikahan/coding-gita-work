/*Q7. Write a program using a for loop to print the sum of numbers from 1 to 50.*/
#include <stdio.h>
int mian()
{
    int a;
    int sum=0;
    for (a = 1; a <= 50; a++)
    {
          sum = sum + a;
        printf("%d\n", sum);
    }

    return 0;
}