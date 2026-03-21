/*Q2. Write a program using a for loop to print even numbers from 2 to 20.*/
#include <stdio.h>
int main()
{
    int a;
    for (a = 2; a <= 20; a++)
    {
        if (a % 2 == 0)
        {
            printf("%d\n", a);
        }
    }

    return 0;
}